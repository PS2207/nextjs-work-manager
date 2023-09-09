import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user){
   const result =await httpAxios
             .post("/apis/users", user)
             .then((response)=> response.data)
   return result;
}

export async function login(loginData){
   const result = await httpAxios
          .post("/apis/login", loginData)
          .then((response)=> response.data);
   return result;
}
export async function currentUser(){
   const result = await httpAxios
            .get("/apis/current",)
            .then(response=>response.data)
   return result;
}
export async function logout(){
   const result= await httpAxios
           .post("/apis/logout")
           .then((response)=>response.data);
   return result;
}
