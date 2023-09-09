import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import {connectDb} from "@/helper/db"
connectDb()
// get all tasks of a particular user by userId without user details
// url- http://localhost:3000/apis/users/64afcff2340bc2b786fcb9e1/tasks
export async function GET(request, {params}){
   const {userId} = params
    try{
         //  await connectDb();
        const tasks = await Task.find({userId})
    //   const tasks = await Task.find({userId: userId})
        return NextResponse.json(tasks)
    }catch(error){
        console.log(error);
        return getResponseMessage("Failed to get Tasks", 404, false)
    }
}

//get all tasks with user details
// export async function GET(request, {params}){
//     const {userId} = params
//      try{
//         const user =await User.findById(userId)
//          const tasks = await Task.find({userId})
//          return NextResponse.json({user,tasks})
//      }catch(error){
//          console.log(error);
//          return getResponseMessage("Failed to get Tasks", 404, false)
//      }
//  }