
//keeping client component within server component
import AddTask from "./AddTask"
//this metadata works on server component
export const metadata={
    title: "Add Task : Work Manager"
  }
const AddTaskPage=()=>{
   return <AddTask/>
}
export default AddTaskPage