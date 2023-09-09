import { httpAxios } from "@/helper/httpHelper";


export async function addTask(task){
   const result = await httpAxios
      .post("/apis/tasks", task)
      .then((response)=> response.data)
   return result;
}
export async function getTasksOfUser(userId){
   const result= httpAxios
       .get(`apis/users/${userId}/tasks`)
       .then((response)=> response.data)
   return result
}

export async function deleteTask(taskId){
   const result= await httpAxios
     .delete(`/apis/tasks/${taskId}`)
     .then(response=> response.data)
   return result;
}
