// this is server side component, but we want to make this as client side component so use-
// "use client"
export default function info(){
    console.log("client side component");
    return (
        <div>
         <h1>info</h1>
         <button className="px-3 py-2 rounded bg-blue-600">Click here</button>
        </div>
    )
}