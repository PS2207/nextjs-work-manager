"use client"
import { login } from "@/services/userService"
import Image from "next/image"
import loginImg from '../../assets/login.png'
import Link from "next/link"
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import UserContext from "@/context/userContext"

const Login =()=>{
  // this line is for redirect after login
  const router = useRouter()
  const context =useContext(UserContext)
    const [loginData, setLoginData] =useState({
        email:'',
        password:''
    })
    const loginFormSubmitted= async (event)=>{
      event.preventDefault()
      console.log(loginData);
      if(loginData.email.trim()==="" || loginData.password.trim()===""){
        toast.info("Invalid data !!",{
          position: "top-center"
        })
        return;
      }
      //if valid data then login
      try{
       const result = await login(loginData)
       console.log(result);
       toast.success("Logged In");

       //redirect to another page after login
       context.setUser(result.user)
       router.push("/profile/user")
      }catch(error){
        console.log(error);
        toast.error(error.response.data.message,{
          position:"top-center"
        })
      }
    }

    //reset form
    const resetLoginForm=()=>{
      setLoginData({
        email:'',
        password:''
      })
    }
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-5 bg-white p-4">
                <div className="">
                    <div className="flex justify-center">
                        <Image alt="login banner" src={loginImg} style={{width:"50%"}}/>
                    </div>
                  <h1 className="text-3xl text-center">Login Here</h1>
                  <form onSubmit={loginFormSubmitted}>
                    <div className="mt-3">
                        <label className="block text-sm font-medium ms-3" htmlFor="user_email">Email</label>
                        <input type="text" placeholder="Enter your email"
                          id="user_email"
                          className="w-full p-3 bg-gray-300 rounded-2xl focus:outline-none border border-gray-400 focus:border-gray-500"
                          onChange={(event)=>{                         
                            setLoginData({
                                ...loginData,
                                email: event.target.value
                            })
                          }}
                          value={loginData.email}
                        />
                    </div>
                    <div className="mt-3">
                       <label className="block text-sm font-medium ms-3" htmlFor="user_password">Password</label>
                       <input type="password" placeholder="Enter your password"
                          id="user_password"
                          className="w-full p-3 bg-gray-300 rounded-2xl focus:outline-none border border-gray-400 focus:border-gray-500"
                          onChange={(event)=>{                         
                            setLoginData({
                                ...loginData,
                                password: event.target.value
                            })
                          }}
                          value={loginData.password}
                       />
                    </div>
                    <div className="mt-3 text-center">
                        <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">Login</button>
                        <button type="reset"  onClick={resetLoginForm} className="bg-red-600 text-white px-3 py-2 rounded-lg ms-2 hover:bg-red-700">Reset</button>
                    </div >
                    <div className="flex justify-center text-blue-800 ">
                      <h1>Don't have an account? &nbsp;</h1>
                      <Link href={"/signup"} className="hover:text-blue-600 underline">Signup</Link>
                    </div>          
                  </form>
                </div>
            </div>
        </div>
    )
}
export default Login