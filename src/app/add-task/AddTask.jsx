"use client" //after using this, we can use client components such as onChange(), onClick(), BroweserHistory, BrowserEvents
import React, { useState } from 'react'
import addImg from '../../assets/addImg.png'
import Image from 'next/image'
import { addTask } from '@/services/taskService'
import { toast}  from 'react-toastify'

//this metadata works on cserver component
// export const metadata={
//   title: "Add Task : Work Manager"
// }
// search unDraw.com for downloading background image
const AddTask = () => {
  // document.title = metadata.title
  // taking a variable task & value of task will be changed with the help of setTask
  const [task,setTask]= useState({
    title:"",
    content:"",
    status:"none",
    //temp solution -since we want to login user can createaddTask by userId, but login api is not created so hardcoded
    userId:"64afcff2340bc2b786fcb9e1"
  })

  const handleAddTask = async (event)=>{
    event.preventDefault();
    console.log(task);

    //validate task data that means title,content,userId are blank or what
    try{
      const result = await addTask(task);
      console.log(result);
      //for success message using toast
      toast.success("Task created successfully !!", {
        position: 'top-center'
      })
      setTask({
        title:'',
        content:'',
        status:'none'
      })
    }catch(error){
      console.log(error);
      //for error message using toast
      toast.error("Task not added !!", {
        position: 'top-center'
      })
    }
  }

  // added by me
  const clearForm=()=>{
    setTask({
      title:'',
      content:'',
      status:'none'
    })
  }
  return (
    <div className='grid grid-cols-12'>
      {/* border border-red-400 */}
      <div className='bg-white col-span-4 col-start-5 p-5  shadow-gray-400 shadow'>
        <div className='my-3 flex justify-center'>
          <Image alt="login banner" src={addImg} style={{width:"50%"}}/>
        </div>
       {/* { JSON.stringify(task)} */}
        <h1 className='text-3xl text-center' >Add your task</h1>
        <form action="#!" onSubmit={handleAddTask}>
          <div className='mt-4'>
            <label htmlFor="task_title" className='block text-sm font-medium mb-2'>Title</label>
            <input type="text" className='w-full p-2.5 rounded-3xl bg-purple-200 focus:outline-none border border-gray-400 focus:border-gray-500'
                   id="task_title" name="task_title" 
                   onChange={(event)=>{
                    setTask({
                      ...task,
                      title: event.target.value
                    })
                   }}
                   value={task.title}
            />
          </div>
          <div className='mt-4'>
            <label htmlFor="task_content" className='block text-sm font-medium mb-2'>Content</label>
            <textarea className='w-full p-2.5 rounded-3xl bg-purple-200 focus:outline-none border border-gray-400 focus:border-gray-500' 
                      id="task_content" rows={5}
                      //2-way data binding
                      name="task_content"
                      // when we change in field then data will be changed in variable
                      onChange={(event)=>{
                        setTask({
                          ...task,
                          content: event.target.value
                        })
                      }
                      }
                 // when we change in variable then data will be changed in field
                      value={task.content}></textarea>
          </div>
          <div className='mt-4'>
            <label htmlFor="task_status" className='block text-sm font-medium mb-2'>Status</label>
            <select className='w-full rounded-3xl bg-purple-200 focus:outline-none border border-gray-400 focus:border-gray-500' id="task_status"
              name="task_status"
              onChange={(event)=>{
                setTask({
                  ...task,
                  status: event.target.value
                })
              }}
              value={task.status}
            >
              <option value="none" disabled>---Select Status---</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className='mt-4 flex justify-center'>
            <button className='bg-blue-600 text-white rounded-lg px-3 py-2 hover:bg-blue-500' type='submit'>Add Task</button>
            <button type="reset" onClick={clearForm} className='bg-red-600 text-white rounded-lg px-3 py-2 hover:bg-red-500 ms-3'>Clear</button>
          </div>
        </form>
      
      
      </div>
    </div>
  )
}

export default AddTask