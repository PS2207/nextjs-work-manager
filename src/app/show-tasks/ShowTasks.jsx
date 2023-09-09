"use client"
import UserContext from "@/context/userContext";
import { useContext, useEffect, useState } from "react";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import Task from "./Task";
import { toast } from "react-toastify";
import swal from "sweetalert";

const ShowTasks =()=>{
    const [tasks, setTasks]= useState([])
    const context= useContext(UserContext)
    // fetch id stored from frontend such as from localstorage
    async function loadTasks(userId){
       try{
         const tasks= await getTasksOfUser(userId);
         setTasks([...tasks].reverse())
         console.log(tasks);
       }catch(error){
        console.log(error);
       }
    }
  useEffect(()=>{
    if(context.user){
        loadTasks(context.user._id)
    }
  },[context.user])
 
//calling api here deleteTask(taskId) from taskService to delete task 
   async function deleteTaskParent(taskId){
    try{
     const result = await deleteTask(taskId)
     console.log(result);
    //this line is for- we don't need to refresh after deleteing task
     const newTasks= tasks.filter((item)=> item._id != taskId)
     setTasks(newTasks)
     toast.success("Your task is deleted !!")
    }catch(error){
      console.log(error);
      toast.error("Error in deleting task !!")
    }
  }
  return (
    <div className="grid grid-cols-12 mt-3">
        <div className="col-span-6 col-start-4">
            <h1 className="text-center text-3xl mb-3">Your Tasks ({tasks.length})</h1>
            {
                tasks.map((task)=>(
                    <Task task={task} key={task._id} deleteTaskParent={deleteTaskParent}/>
                ))
            }     
        </div>
    </div>
  )
}
export default ShowTasks;