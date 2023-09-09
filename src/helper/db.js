import mongoose, { connection } from "mongoose";
// import { User } from "../models/user" //if i create user here then import

const config={
    isConnected: 0,
}
// creating connection with db using mongoose library
// both way we can write code
// (i)using async-await & try-catch (ii)then-catch
// this import will work in another file - import {connectDb} from "@/helper/db"
export const connectDb = async ()=> { //we can also use arrow function 
//    if connection is already created with db i.e true or 1
    if(config.isConnected){
        return;
    }
    // export default async function connectDb(){  //this import will work in another file - import connectDb from "@/helper/db"
    try{
        const {connection} =await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "nextjs_workmanager"
        })
        console.log("Connected to mongodb...");
        console.log(connection);
        console.log(connection.readyState);
        config.isConnected = connection.readyState
    }
    catch(error){
        console.log("Failed to connect with database");
        console.log(error);
    }
}
// connection readystate
// 0=disconnected
// 1= connected
// 2=Connecting
// 3=disconnecting
// 99=uninitialized