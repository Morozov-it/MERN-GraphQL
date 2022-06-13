const { clients, projects } = require('../testData')
const { ClientType, ProjectType } = require('./types')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql')

//Корневой запрос
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new GraphQLList(ClientType), //чтобы вернуть просто массив объектов
            resolve: () => clients
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } }, //возможность для передачи аргументов
            resolve: (parent, args) => {
                return clients.find((client) => client.id === args.id) //запросы к бд
            }
        },

        projects: {
            type: new GraphQLList(ProjectType),
            resolve: () => projects
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return projects.find((project) => project.id === args.id)
            }
        },
    }
});

//на экспорт новый класс схемы с запросами
module.exports = new GraphQLSchema({
    query: RootQuery
})