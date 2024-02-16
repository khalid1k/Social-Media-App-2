import  UserModel  from "@/models/userSchema";
import PostsModel  from "@/models/PostsSchema";
import CommentModel from "@/models/commentSchema";
export const resolvers = {
    Query: {
        getUsers: async () => {
            try {
                const users = await UserModel.find();
                return users;
            } catch (error) {
                throw new Error("Failed to fetch users");
            }
        },
        getPosts: async () => {
            try {
                const posts = await PostsModel.find();
                return posts;
            } catch (error) {
                throw new Error("Failed to fetch Posts");
            }
        },
        getComments: async () => {
            try {
                const comments = await CommentModel.find();
                return comments;
            } catch (error) {
                throw new Error("Failed to fetch Comments");
            }
        },
    },
    // Mutation: {
    //     createUser: async (_, { name, email, age }) => {
    //         try {
    //             const user = await UserModel.create({ name, email, age });
    //             return user;
    //         } catch (error) {
    //             throw new Error("Failed to create user");
    //         }
    //     },
    // },
};
