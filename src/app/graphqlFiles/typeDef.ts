import { gql } from "graphql-tag";
export const typeDefs = gql`
    scalar Date
    type Query {
        getUsers: [User!]!
        getPosts: [Posts!]
        getComments: [Comment!]
    }

    type User {
        _id: ID!
        name: String!
        age: Int!
        email: String!
        gender: String!
        password: String!
        createdAt: Date!
        updatedAt: Date!
    }

    input NewUserInput {
        name: String!
        age: Int!
        email: String!
        gender: String!
        password: String!
    }

    type Posts {
        _id: ID!
        title: String!
        content: String!
        postImage: String!
        userId: ID!
    }

    type Comment {
        _id: ID!
        userId: ID!
        postId: ID!
        commment: ID!
        createdAt: Date
        updatedAt: Date
    }
`;

//resolver

// const typeDefs = `#graphql
//   type User {
//     id: ID!
//     first_name: String!
//     last_name: String!
//     email: String!
//     age: Int!
//     active: Boolean
//   }

//   input NewUserInput {
//     first_name: String!
//     last_name: String!
//     email: String!
//     age: Int!
//   }

//   input UpdateUserInput {
//     id: ID!
//     first_name: String
//     last_name: String
//     email: String
//     age: Int
//     active: Boolean
//   }

//   type Query {
//     users: [User]
//   }

//   type Mutation {
//     createUser(input: NewUserInput!): User
//     updateUser(input: UpdateUserInput!): User
//     deleteUser(id: ID!): String
//   }
// `;

// export default typeDefs;
