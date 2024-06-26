export const typeDefs = `#graphql
  type Peli {
    id: ID!
    name: String!
    director: String!
  }
  type Director{
    id:ID!
    name:String!
    age:Int!
  }

  type Query {
    Pelis: [Peli!]!
    Peli(id: ID!): Peli!
    pelisdirecotr(director:String!):[Peli!]!
    director(id:ID!):Director!
  }
  type Mutation {
    addDirector(name:String!,age:Int!):Director!
    addPeli(name: String!,director:String!): Peli!
    deletePeli(id: ID!): Peli!
    updatePeli(id: ID!, name: String, director: String): Peli!
    deleteDirector(id: ID!): Director!

  }
`;