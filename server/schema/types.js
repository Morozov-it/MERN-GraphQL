const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const { clients, projects } = require('../testData')

//ClientType
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
});

//ProjectType
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },

        //получение поля другой сущности, parent это projectType
        client: {
            type: ClientType,
            resolve: (parent) => {
                return clients.find((client) => client.id === parent.id) //запросы к бд
            }
        },
    })
});

module.exports = { ClientType, ProjectType }