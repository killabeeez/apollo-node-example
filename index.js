
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './api/schema';
import resolvers from './api/resolvers';

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  playground: {
		settings: {
			'editor.theme': 'light'
    }
  }
});
const app = express();

server.applyMiddleware({ app })

app.get('/', (req, res) => res.send('Babel Working!'));

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})