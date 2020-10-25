const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    signedIn: Boolean
    me:[User]
  }

  type User {
    user_id: String!
    email: String!
    given_name: String
    family_name: String
    post: [Post]

  }
  type Post {
    uri: String
    title: String
    description: String
    user_id:String
  }

  type Mutation {
      createUser(user_id: String, email: String, given_name: String, family_name: String): User
      createPost(uri: String, title: String, desctiption: String, user_id: String): Post
  }
`;

module.exports = typeDefs;