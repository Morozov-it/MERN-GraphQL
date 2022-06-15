const { ClientType, ProjectType } = require('./types')
const { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList } = require('graphql')
const ClientController = require('../controllers/ClientController')
const ProjectController = require('../controllers/ProjectController')

//Корневой запрос
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //поля в основном запросе
        clients: {
            type: new GraphQLList(ClientType), //чтобы вернуть просто массив объектов
            resolve: () => ClientController.getAll() //запросы к бд
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } }, //возможность для передачи аргументов
            resolve: (parent, args) => ClientController.getOne(args.id) //запросы к бд
        },

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

//на экспорт новый класс схемы с запросами
module.exports = new GraphQLSchema({
    query: RootQuery
})