import { gql } from "graphql-tag";
export const typeDefs = gql`
    scalar Date
    type Query {
        getUsers: [User!]!
        getPosts: [Posts!]
        getComments: [Comment!]
        comment(id:ID!):Comment
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
    input NewPostInput {
        title:String!
        content:String!
        postImage:PostImageInput!
        userId:ID!

    }
    input PostImageInput {
        myFile: String!
      }

    type Posts {
        _id: ID!
        title: String!
        content: String!
        postImage: String!
        userId: ID!
        createdAt:Date
        updatedAt:Date
    }
    input NewCommentInput {
        userId:ID!
        postId:ID!
        comment:String!
    }

    type Comment {
        _id: ID!
        userId: ID!
        postId: ID!
        comment: String!
        createdAt: Date
        updatedAt: Date
    }
    type Mutation{
        signUp(userNew:NewUserInput!):User
        createNewPost(postNew:NewPostInput!):Posts
        createNewComment(commentNew:NewCommentInput!):Comment
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
