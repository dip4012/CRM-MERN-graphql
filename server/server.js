const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const gql = require("graphql-tag");
const { ApolloServer } = require("@apollo/server");
const { buildSubgraphSchema } = require("@apollo/subgraph");
const { expressMiddleware } = require("@apollo/server/express4");

const { readFileSync } = require("fs");
const { join } = require("path");

const { resolvers } = require("./src/resolvers");

const PORT = 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const typeDefs = gql(
  readFileSync(join(__dirname, "src", "schema.graphql"), {
    encoding: "utf-8",
  })
);

// const startApolloServer = async () => {
// 	const server = new ApolloServer({
// 		schema: buildSubgraphSchema({ typeDefs, resolvers }),
// 	})

// 	await server.start()
// 	return server
// }

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

(async function () {
  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
})();
