import { User } from "@/models/user";
import { NextResponse } from "next/server";
import  bcrypt  from "bcryptjs";
import jwt from "jsonwebtoken";
import {connectDb} from "@/helper/db"


export async function POST(request){
  // follow 5 steps to login-
  // (i)login email,password 
    console.log("Login api");
    const {email, password, name} =await request.json();

    // return NextResponse.json({
    //     message: "success"
    // })

    try{
      await connectDb();
      // (ii)find user with email/username that is used to login  -in this case we use email
      const user = await User.findOne({
        email: email 
        //  name: name
       
      })
      //(iii)check user with email/id is present in db or not
      if(user==null){
        throw new Error("User not found !!")
      }
      //(iv)validate login password with user password
      const matched= bcrypt.compareSync(password, user.password)
      if(!matched){
        throw new Error("Password not matched !!")
      }
      //(v)generate token -using user data such as id, email,name + jwt key(some characters) 
    const token = jwt.sign({
      _id:user._id,
        // name:user.name,
        email:user.email
      },process.env.JWT_KEY)
     
      //create nextResponse -cookie
      const response = NextResponse.json({
        message: "Login Success",
        success: true,
        user:user
      })
      response.cookies.set("authToken", token, {
        expiresIn: "1d",
        httpOnly: true
      })
      console.log(user);
      console.log(token);

    //   return NextResponse.json({message: "success"})
     return response
    }catch(error){
        return NextResponse.json({
            message: error.message,
            success: false
        },
        {
            status: 500
        })
    }
}