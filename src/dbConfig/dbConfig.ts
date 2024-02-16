
import mongoose from "mongoose";

const db_url = process.env.DB_URL || "mongodb://127.0.0.1:27017/TodoList";

export const ConnectDb = async () => {
    try {
        const { connection } = await mongoose.connect(db_url);
    } catch (error) {
        console.error("an error is occured while connecting to the database");
    }
};

// import mongoose, { Connection } from "mongoose";

// let client: Connection | null = null;
// let bucket: mongoose.mongo.GridFSBucket | null = null;

// const db_url: string =
//     process.env.DB_URL || "mongodb://127.0.0.1:27017/TodoList";

// async function ConnectDb() {
//     if (client) {
//         return { client, bucket };
//     }

//     try {
//         await mongoose.connect(db_url);

//         client = mongoose.connection;

//         // Set up GridFSBucket
//         if (client) {
//             bucket = new mongoose.mongo.GridFSBucket(client.db, {
//                 bucketName: "images",
//             });
//         }

//         console.log("Connected to the Database");
//         return { client, bucket };
//     } catch (error) {
//         console.error(
//             "An error occurred while connecting to the database:",
//             error
//         );
//         throw error; // Rethrow the error to handle it in the caller function
//     }
// }

// export default ConnectDb;
