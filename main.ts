import mongoose from "mongoose"
import { GraphQLError } from "graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { typeDefs } from "./gql/schema.ts";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutations.ts";


const env=await load()
const MONGO_URL = Deno.env.get("MONGO_URL")||env.MONGO_URL||"mongodb+srv://nachetegarcia10:123456789N@cluster0.mwqkjcg.mongodb.net/PELICULAS?retryWrites=true&w=majority";
if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
}

// Connect to MongoDB
await mongoose.connect(MONGO_URL);

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
});

const { url } = await startStandaloneServer(server,{listen:{port:4000,},});
console.log(`🚀 Server ready at ${url}`);