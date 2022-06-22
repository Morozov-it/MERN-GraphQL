const { ClientType, ProjectType } = require('./types')
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLEnumType
} = require('graphql')
const ClientController = require('../controllers/ClientController')
const ProjectController = require('../controllers/ProjectController')

//Корневой запрос
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //поля в основном запросе
        //clients
        clients: {
            type: new GraphQLList(ClientType), //чтобы вернуть просто массив объектов
            resolve: () => ClientController.getAll(), //запросы к бд
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } }, //возможность для передачи аргументов
            resolve: (parent, args) => ClientController.getOne(args.id) //запросы к бд
        },

        //projects
        projects: {
            type: new GraphQLList(ProjectType),
            resolve: () => ProjectController.getAll()
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => ProjectController.getOne(args.id)
        },
    }
});

//Мутации
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //clients
        addClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }, //обязательное поле
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => ClientController.create(args)
        },
        deleteClient: {
            type: ClientType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve: (parent, args) => ClientController.delete(args.id)
        },

        //projects
        addProject: {
            type: ProjectType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatus',
                        values: {
                            'new': { value: 'not started' },
                            'progress': { value: 'in progress' },
                            'completed': { value: 'completed' },
                        }
                    }),
                    defaultValue: 'not started',
                },
                clientId: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve: (parent, args) => ProjectController.create(args)
        },
        deleteProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve: (parent, args) => ProjectController.delete(args.id)
        },
        updateProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }, //при обновлении только это обязательное поле, остальные можно не передавать, останутся без изменения
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatusUpdate',
                        values: {
                            'new': { value: 'not started' },
                            'progress': { value: 'in progress' },
                            'completed': { value: 'completed' },
                        }
                    }),
                },
                clientId: { type: GraphQLID }
            },
            resolve: (parent, args) => ProjectController.update(args)
        }
    }
})

//на экспорт новый класс схемы с запросами
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})
