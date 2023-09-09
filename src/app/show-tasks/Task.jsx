// "use client"
import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx';
import swal from 'sweetalert';


const Task = ({task, deleteTaskParent}) => {
  const {user} = useContext(UserContext)
  //delete task
  function deleteTask(taskId){
    // swal({
    //   title: `Do you want to delete the task?`,
    //   buttons:true,
    //   button:`Delete`, 
    //   // denyButtonText:`Don't save`,
    //   icon:'warning'
    // })
    // .then((e)=>{
    //   if(e.isConfirmed){
    //     this.deleteTaskParent(taskId)
    //   }
    // });
 
    deleteTaskParent(taskId)
  }
  return (
    <div className={`shadow-lg mt-2 rounded-md ${task.status == "completed"? "bg-green-800  text-white" :"bg-gray-600 text-white "}`}>
        <div className='p-5'>
            <div className='flex justify-between '>
             <h1 className='text-2xl font-semibold'>{task.title}</h1>
             <span className='shadow-lg bg-gray-800 rounded-full w-6 h-6 flex justify-center items-center hover:bg-gray-500 cursor-pointer'
               onClick={()=>{
                deleteTask(task._id)
               }}
             > 
              <RxCross2/>
             </span>
            </div>
            <p className='font-normal'>{task.content}</p>
            {/* <p className='text-right'>Author: <span className='font-bold'>{user.name}</span></p> */}
            <div className='flex justify-between mt-3'>
             <p >Status: <span className='font-bold'>{task.status}</span></p>
             <p className='text-right'>Author: <span className='font-bold'>{user?.name}</span></p>
            </div>
            
        </div>
    </div>
  )
}

export default Task

// import React from 'react'

// const Task = () => {
//   return (
//     <div>Task</div>
//   )
// }

// export default Task