const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Gets the entire roster of Avengers"
    getAllAvengers: [Avenger!]

    "Gets specific Avengers based on ID"
    getAvengers(ids: [ID!]!): [Avenger]
  }

  type Mutation {
    "Adds a list of Avengers"
    addAvengers(avengers: [AddAvengerInput!]!): [Avenger]

    "Updates specific Avengers based on IDs"
    updateAvengers(avengers: [UpdateAvengerInput!]!): [Avenger]

    "Deletes specific Avengers based on IDs"
    deleteAvengers(ids: [ID!]!): [Avenger]
  }

  "A basic object that holds some key details about Marvel Avengers"
  type Avenger {
    id: ID!
    name: String!
    appearances: Int
    alignment: String
  }

  input UpdateAvengerInput {
    id: ID!
    name: String
    appearances: Int
    alignment: String
  }

  input AddAvengerInput {
    name: String!
    appearances: Int
    alignment: String
  }
`;

module.exports = typeDefs;
