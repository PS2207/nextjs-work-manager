"use client"

import Link from 'next/link'
import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import insta from '../assets/insta.jpg'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='h-60 bg-slate-500 mt-5'>
       
        <div className='flex justify-around text-white'>
            <div className='text-center flex flex-col justify-center'> 
              <h1 className='text-3xl'>Welcome to work manager</h1>
              <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sed laudantium minus saepe ad harum beatae facere iste atque nostrum?</p>
            </div>
            <div className='text-center mt-5'>
              <h1 className='font-bold text-yellow-500'>Important Links</h1>
              <ul>
                <li><Link href={"/facebook"} className='hover:text-pink-200 flex'><span className=' mt-1 mr-0.5 text-blue-900'><AiFillFacebook/></span> Facebook</Link></li>
                {/* <li><Link href={"/instagram"} className='hover:text-pink-200 flex'><span  className='mt-1 mr-0.5 w-4'><Image src={insta}/></span>Instagram</Link></li> */}
                <li><Link href={"/instagram"} className='hover:text-pink-200 flex'>
                  <span  className='mt-1 mr-0.5'><FaInstagramSquare/></span>
                  Instagram</Link></li>
                <li><Link href={"/youtube"} className='hover:text-pink-200 flex'><span className='mt-1 mr-0.5 text-red-700'><FaYoutube/></span>Youtube</Link></li>
              </ul>
            </div>
        </div>
   
    </footer>
  )
}

export default Footer