import UserModel from "@/models/userSchema";
import PostsModel from "@/models/PostsSchema";
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
  Mutation: {
    signUp: async (_: any, { userNew }: any) => {
      try {
        const existUser = await UserModel.findOne({ email: userNew.email });
        if (existUser) {
          throw new Error("user already exist with that Email");
        }

        const user = await UserModel.create({ ...userNew });
        return user;
      } catch (error) {
        throw new Error("Failed to create New user");
      }
    },
    createNewPost: async (_: any, { postNew }: any) => {
      try {
        const post = await PostsModel.create({
          title: postNew.title,
          content: postNew.content,
          postImage: postNew.postImage.myFile,
          userId: postNew.userId,
        });
        return post;
      } catch (error) {
        console.error("Error creating new post:", error);
        throw new Error("Failed to create new post");
      }
    },
    createNewComment: async (_:any, {commentNew}:any)=>{
        try{
            const newComment= await CommentModel.create({...commentNew});
            return newComment;
        }catch(error){
            throw new Error("Failed to create new comment")
        }
        
    }
  },
};
