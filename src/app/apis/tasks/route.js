import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"
import {connectDb} from "@/helper/db"
import  jwt  from "jsonwebtoken"
connectDb();
export async function GET(){
    try{
      //  await connectDb();
       let tasks=[]
        tasks= await Task.find()
        return NextResponse.json(tasks)
    }
    catch(error){
        return getResponseMessage("Error in getting task data !!", 500, false)   
     }
}

// localhost:3000/apis/tasks
export async function POST(request){
   const {title,content, status} =await request.json()
   // get userId from server to add task we can also get id stored in frontent
   const authToken= request.cookies.get("authToken")?.value
   const data= jwt.verify(authToken, process.env.JWT_KEY)
   console.log(data._id);
   try{
     const task = new Task({
        title,
        content,
        userId: data._id,
        status
     })
      //  await connectDb();
    const createdTask= await task.save()
    return  NextResponse.json(createdTask,{
        status: 201
     })
   }catch(error){
     console.log(error);
     return getResponseMessage("Failed to create tasks !!", 500, false)
   }
}