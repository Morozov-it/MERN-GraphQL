const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const ClientController = require('../controllers/ClientController')

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
            resolve: (parent) => ClientController.getOne(parent.clientId)
        },
    })
});

module.exports = { ClientType, ProjectType }