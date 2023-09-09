"use client"
import UserContext from '@/context/userContext'
import { logout } from '@/services/userService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import {FiLogIn} from "react-icons/fi"
import {SiGnuprivacyguard} from "react-icons/si"
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import HomeIcon from '@mui/icons-material/Home';
import work from '../assets/work.png'
import Image from 'next/image'
 
const MyNavbar = () => {
    const context = useContext(UserContext)
    const router= useRouter()
    async function doLogout(){
        try{
         const result = await logout();
         console.log(result);
         context.setUser(undefined)
         toast.warning("logged out successfully !!",)
         router.push("/login")
        }catch(error){
            console.log(error);
            toast.error("Logout Error")
        }
    }
  return (
    <nav className='text-white bg-purple-800 h-16 flex justify-between items-center px-36 sticky top-0'>
      <div className='brand'>
        {/* <Image alt="" src={work} style={{width: '6%', height: '5%'}} className='rounded-full'/> */}
        <Link href={"/"} className='hover:text-purple-200'>                
          <h1 className='text-2xl font-semibold'>Work Manager</h1>
      
        </Link>
      </div>
      {/* middle */}
        <div className=''>          
              <ul className='flex space-x-3 '>
                {                
                  context.user &&
                   <>
                    <li >
                        <Link href={"/"} className='hover:text-purple-300'><HomeIcon className='text-2xl'/>Home</Link>
                    </li>
                    <li  className='flex'>
                        <Link href={"/add-task"} className='hover:text-purple-300 '><PlaylistAddIcon className='text-2xl'/>Add Task</Link>
                    </li>
                    <li  className='flex'>
                        <Link href={"/show-tasks"} className='hover:text-purple-300 '><TheaterComedyIcon className='text-2xl'/>Show Tasks</Link>
                    </li>
                  </>                    
                  }
                </ul>
  
            </div>
 {/* right */}
        <div>
          <ul className='flex space-x-5 '>
          {
            context.user && (
                <>
                 <li>
                  <Link href={"/profile/user"} className='hover:text-purple-300 flex items-center'><span className='text-2xl'><PersonIcon/></span>{context.user.name}</Link>
                 </li>
                 <li>
                  <button onClick={doLogout} className='hover:text-purple-300 flex items-center'><span className='text-2xl'><LogoutIcon/></span>Logout</button>
                 </li>
                </>
            )
          }
          {
            !context.user && (
              <>
               <li>               
                <Link href="/login" className='hover:text-purple-300 flex'>  <FiLogIn className='mt-1 mr-0.5'/> Login</Link>
               </li>
               <li>             
                <Link href="/signup" className='hover:text-purple-300 flex'> <SiGnuprivacyguard className='mt-1 mr-0.5'/>Signup</Link>
               </li>
              </>
            )
          }
          </ul>
        </div>
    </nav>
  )
}

export default MyNavbar