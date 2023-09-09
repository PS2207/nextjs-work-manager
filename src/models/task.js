import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        enum:["pending", "completed", "just_added"],
        default: "pending"
    },
    // mongoose automatically creates id so it will be type:mongoose.ObjectId
    userId:{
        type:mongoose.ObjectId,
        required:true
    }
})

export const Task= 
  mongoose.models.tasks || mongoose.model("tasks",TaskSchema)

