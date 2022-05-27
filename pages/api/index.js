import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../graphql/schemas'
import { resolvers } from '../../graphql/resolvers'
import database from 'database/database'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

const startServer = apolloServer.start()
const db = database.configDb()
export default async function handler (req, res) {
  await db
  await startServer
  await apolloServer.createHandler({ path: '/api' })(req, res) // highlight-line
}
export const config = {
  api: {
    bodyParser: false
  }
}
