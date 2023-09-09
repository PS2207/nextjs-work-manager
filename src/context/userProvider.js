"use client"
import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { httpAxios } from "@/helper/httpHelper";
import { currentUser } from "@/services/userService";

//  const UserContext = createContext({})
const UserProvider =({children})=>{
 const [user,setUser] =  useState(undefined)
 
 useEffect(()=>{
    async function load(){
        try{
            // httpAxios.get("/apis/current")
            const loggedInUser= await currentUser();
            console.log(loggedInUser);
            setUser({...loggedInUser})
    
          }catch(error){
             console.log(error);
            //  toast.error("error in loading current user")
             setUser(undefined)
          }
    }
    load();
 },[])
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
export default UserProvider;