// import connectDb from "@/helper/db" //this will work- "export default async function connectDb(){}"
import {connectDb} from "@/helper/db" //in this case -this function will work "export const connectDb = async ()=> {}"
import { getResponseMessage } from "@/helper/responseMessage"
import { User } from "@/models/user"
import { NextResponse } from "next/server"
var bcrypt = require('bcryptjs');
connectDb()
//create user
export async function POST(request){
    const {name,email,password,about,profileURL} = await request.json()
    const user= new User({
      name,
      email,
      password,
      about,
      profileURL
     })
     try{
      // both way we can use , if we use hash() we have to use await before it, but hashSync is already synchronous way to bcrypt
   //   user.password=  bcrypt.hashSync(user.password, 10)
        user.password=  bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT))
    
        console.log(user);
         //  await connectDb();
        const createdUser = await user.save()

        return NextResponse.json(createdUser ,{
            status:201
        })
     }
     catch(error){
        console.log(error);
        return getResponseMessage("Failed to create users !!",500,false);
     }
}

// get all users
export async function GET(){
    let users=  []
     try{
       //  await connectDb();
        users = await User.find().select("-password");
         return NextResponse.json(users);
     }
     catch(error){
        return getResponseMessage("Error in getting users data !!",401,false)
     }
    
   
}
