"use client"
import Image from 'next/image'
import signup from '../../assets/signup.png'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { signUp } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {CiMail} from "react-icons/ci"
import {AiOutlineUser} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"
import {FcAbout} from "react-icons/fc"

const SignUp=()=>{
  const router= useRouter()
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        about:'',
        profileURL:'https://th.bing.com/th/id/R.95c74e73a0802296ef631dd71dfa09d2?rik=eIiF8VmPmhhzXw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Image.png&ehk=YvjAOG2T71oFU41G13CCoak98yJU3f0YK669MQiOROg%3d&risl=&pid=ImgRaw&r=0'
    })
    const doSignup=async (event)=>{
        event.preventDefault();
        console.log(data);
        if(data.name.trim()=== "" || data.name == null){
            toast.warning("Name is required !!",{
                position: "top-center"
            })
            return;
        }
        //TODO : validation for reset of the field
        try{
          const result = await signUp(data)
          console.log(result);
          toast.success("User is registered successfully !!",{
            position: "top-center"
          })
          
          setData({
            name:'',
            email:'',
            password:'',
            about:'',
            profileURL:''
          })
          router.push("/login")
          
        }catch(error){
            console.log(error);
            console.log(error.response.data.message);
            toast.error("Signup Error !!"+ error.response.data.message, {
            position: "top-center"
          })
        };
    };

    const resetForm=()=>{
      setData({
        name:'',
        email:'',
        password:'',
        about:'',
        profileURL:''
      })
    }
    return(
      <div className="grid grid-cols-12 ">
        <div className="col-span-4 col-start-5 border p-4 bg-white">
            <div className="py-5">   
            {/* {JSON.stringify(data)} */}
               <div className=' flex justify-center'>
                 <Image alt="signup banner" src={signup} style={{
                    width:"40%"
                 }}/>
               </div>
               <h1 className="text-3xl text-center">Signup Here</h1>
               <form action="#" className="mt-4" onSubmit={doSignup}>
                 <div className="mt-3">
                    <div className='flex'>
                    <AiOutlineUser/>
                    <label htmlFor="user_name" className="block text-sm font-medium mb-2 ps-2">Username</label>
                    </div>
                    <input type="text" placeholder="Enter here" 
                    className ="w-full p-3 rounded-2xl bg-purple-200  focus:ring-gray-200 focus:outline-none border focus:border-gray-500" 
                    id="user_name"
                    name="user_name"
                    onChange={(event)=>setData({
                        ...data,
                        name: event.target.value
                    })}
                    value={data.name}
                    />
                 </div>
                 <div className="mt-3"> 
                    <div className='flex'>
                    <span className='mt-0.5'><CiMail/></span>
                     <label htmlFor="user_email" className="block text-sm font-medium mb-2 ps-2">Email</label>
                    </div>
                    <input type="email" placeholder="Enter here" 
                    className="w-full p-3 rounded-2xl  bg-purple-200 focus:outline-none border border-gray-400 focus:border-gray-500" 
                    id="user_email"
                    name="user_email"
                    onChange={(event)=>setData({
                        ...data,
                        email: event.target.value
                    })}
                    value={data.email}/>
                 </div>
                 <div className="mt-3">
                   <div className='flex'>
                     <span className='mt-0.5'><RiLockPasswordLine/></span>
                    <label htmlFor="user_password" className="block text-sm font-medium mb-2 ps-2">Password</label>
                   </div>
                    <input type="password" placeholder="Enter here" 
                    className="w-full p-3 rounded-2xl  bg-purple-200 focus:outline-none border border-gray-400 focus:border-gray-500" 
                    id="user_password" name="user_password"
                    onChange={(event)=>setData({
                        ...data,
                        password: event.target.value
                    })}
                    value={data.password}/>
                 </div>
                 <div className="mt-3">
                   <div className='flex'>
                    <span className='mt-0.5'><FcAbout /></span>
                   <label htmlFor="user_about" className="block text-sm font-medium mb-2 ps-2">About</label>
                   </div>
                  <textarea                   
                    placeholder="Write about yourself..." rows={8}
                    className="w-full p-3 rounded-2xl bg-purple-200 border border-gray-400 focus:outline-none  focus:border-gray-500"
                    id="user_about" name="user_about"
                    onChange={(event)=>{ 
                      setData({
                        ...data,
                        about: event.target.value
                      })
                    }} 
                    value={data.about}>
                 </textarea>
                 </div>
                 <div className="mt-3 text-center">
                    <button type="submit" className="text-white px-2 py-3 rounded-lg bg-green-700 hover:bg-green-600">Signup</button>
                    <button type="reset" onClick={resetForm} className="text-white px-2 py-3 rounded-lg ms-2 bg-red-600 hover:bg-red-500">Reset</button>
                 </div>
                 <div  className='flex justify-center text-green-800'>
                  <h1>Already have an account? &nbsp;</h1> 
                  <Link href={"/login"} className='hover:text-green-500 underline'> Login</Link>
                 </div>
             
               </form>
            </div>
        </div>
      </div>
    )
}
export default SignUp