import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware executed");
   
    const authToken= request.cookies.get("authToken")?.value;
     if( request.nextUrl.pathname   === "/apis/login" || 
         request.nextUrl.pathname === "/apis/users"){
      return;
    }
// if user is loggedIn ,need not access /login, /signup path
// here user is either login page or signup page
    const loggedInUserNotAccessPaths= 
      request.nextUrl.pathname   === "/login" || 
      request.nextUrl.pathname === "/signup";
   if(loggedInUserNotAccessPaths){
     //accessing not secured route
      if(authToken){
        return NextResponse.redirect(new URL("/profile/user", request.url))
      }
   }
   else{
    //if user is trying to access another route such as-add-task,show tasks & accessing secured route
    if(!authToken ){
      if(request.nextUrl.pathname.startsWith("/apis")){
        return NextResponse.json({
          message: "Access Denied !!",
          success: false
        },
        {
          status: 401
        })
      }
      return NextResponse.redirect( new URL("/login",request.url))
    }
//     // else{
//       // verify using jwt
//     // }
   }
   console.log(authToken);

};
 
// // matcher allow you to filter middleware to run on specific paths
export const config = {
  matcher: ["/", 
            "/login", 
            "/signup", 
            "/add-task",
            "/show-tasks",
            "/profile/:path*",
            "/apis/:path*"]
}