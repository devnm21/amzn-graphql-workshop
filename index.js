const resolvers = require('./src/resolvers')
const typeDefs = require('./src/typedef')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const apolloStandaloneServer = startStandaloneServer(server, {
    listen: 6003
})
apolloStandaloneServer.then(() => {
    console.log('server started');
})