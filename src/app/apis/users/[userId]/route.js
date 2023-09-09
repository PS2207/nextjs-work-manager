import { getResponseMessage } from "@/helper/responseMessage";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import {connectDb} from "@/helper/db"
//get single user by userId
connectDb()
export async function GET(request,{params}){
    const {userId }= params
    try{
      const user= await User.findById(userId).select("-password") //we don't want to show password
        return NextResponse.json(user)
    }
    catch(error){
        console.log(error);
        return getResponseMessage("Error to get user data", 404, false)
    }
}
