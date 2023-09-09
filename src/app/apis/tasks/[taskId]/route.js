import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import {connectDb} from "@/helper/db"
connectDb()
// apis/tasks/taskId
export async function GET(request, {params} ){
  const {taskId } = params;
  try{
    const task = await Task.findById(taskId)
    return NextResponse.json(task)
  }
  catch(error){
    console.log(error);
    return getResponseMessage("Error in getting task",404,false)
  }
}

// update task
export async function PUT(request,{params}){
  const {taskId} = params;
  const {title,content,status}= await request.json();
  try{
    let fetchedTask =await Task.findById(taskId)
    fetchedTask.title=title,
    fetchedTask.content=content,
    fetchedTask.status=status
     //  await connectDb();
    const updatedTask = await fetchedTask.save();
    
    return NextResponse.json(updatedTask)
  }
  catch(error){
    console.log(error);
    return getResponseMessage("Error in updating task", 500,false)
  }
}

// delete task
export async function DELETE(request,{params}){
  const {taskId} =params;
  try{
     //  await connectDb();
    // let task= await Task.findById(taskId);
     await Task.deleteOne({
      _id: taskId
     });
    // return NextResponse.json({message: "Task Deleted Successfully !!", status: 200})
    return getResponseMessage("Task Deleted Successfully !!", 200, true)
  }catch(error){
    console.log(error);
    return getResponseMessage("Error in deleting Task !!", 500, false)
  }
}