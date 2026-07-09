// import { useState } from 'react'

// const App = () => {
//   const [name,setname]=useState("");
//   const [email,setEmail]=useState("")
//   const fetchuser=()=>{
//     fetch("http://localhost:3000/users",{
//       method:"post",
//       headers:{
//         "content-type":"application/json"
//       },
//       body:JSON.stringify({
//         name,email
//       })
//     }).then(res=>res.json())
//     .then(data=>console.log(data))
//   }
//   return (
//     <div>
//      <input value={name} placeholder='enter name' onChange={(e)=>setname(e.target.value)}/>
//      <input value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
//      <button onClick={fetchuser}>click</button>
//     </div>
//   )
// }

// export default App


// import React, { useEffect } from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [name,setName]=useState([])
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data);
//       setName(data)
//     })
//   },[])
//   return (
//     <div>
//     {name.map((n)=>(
//       <p>{n.name}</p>
//     ))}
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   const [count,setcount]=useState(0)
//   return (
//     <div>
//      <h1>count is:{count}</h1>
//      <button onClick={()=>setcount(count+1)}>click</button>
//     </div>
//   )
// }

// export default App



// import { useEffect, useState } from 'react'

// const App = () => {
//   const [count,setCount]=useState(0)
//  useEffect(()=>{
//    let id=setInterval(()=>{
//     setCount((prev)=>{
//     if(prev>=5){
//       clearInterval(id)
//       return prev
//     }
//     return prev+1
//     })
//    },1000)
//    return ()=>clearInterval(id)
//  },[])
//   return (
//     <div>
//      <h1>count is :{count}</h1>
//     </div>
//   )
// }

// export default App




// // import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       <Home name="shifa" place="karinkllathani"/>
//     </div>
//   )
// }

// export default App

// import React, { useEffect } from 'react'

// const App = () => {
//   useEffect(()=>{
//    console.log("mounting");
//    return ()=>{
//     console.log("unmounting")
//    }
//   },[])
//   return (
//     <div>
//      <h1>hello</h1>
//     </div>
//   )
// }

// export default App



// import { useState } from 'react'
// const App = () => {

//   const [toggle,setToggle]=useState("white");
//   return (
//     <div style={{background:toggle, height:"100vh"}}>
//       <button onClick={()=>setToggle(toggle==="white"?"red":"white")}>click</button>
//     </div>
//   )
// }
// export default App



// import  { useState } from 'react'

// const App = () => {
//   const [toggle,setToggle]=useState("")
//   return (
//  <div className='flex flex-row gap-6'>
//      <button onClick={()=>setToggle("pink")} style={{background:"pink", width:"100px", height:"100px"}}>
           
//     </button>
//     <button  onClick={()=>setToggle("red")} style={{background:"red", width:"100px", height:"100px"}}>
           
//     </button>
    
//     <button onClick={()=>setToggle("yellow")} style={{background:"yellow", width:"100px", height:"100px"}}>
           
//     </button>
//     <button onClick={()=>setToggle("green")} style={{background:"green", width:"100px", height:"100px"}}>
           
//     </button>
//     <button onClick={()=>setToggle("blue")} style={{background:"blue", width:"100px", height:"100px"}}>
           
//     </button>

//     <div style={{width:"100px", height:"100px", background:toggle}}>
         
//     </div>
//  </div>

//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [toggle,setToggle]=useState("")
//   setInterval(()=>{
//        setToggle(toggle===""?"red":toggle==="red"?"pink":toggle==="pink"?"yellow":"green")
//   },1000)
//   return (
//     <div style={{height:"100vh", background:toggle}}>
         
//     </div>
//   )
// }

// export default App


// import { useRef } from "react";

// function App() {
//   const inputRef = useRef();

//   const handleClick = () => {
//     console.log(inputRef.current)
//     inputRef.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Focus</button>
//     </>
//   );
// }

// export default App;




// const App = () => {
//   const isLogin=true;
//   return (
//     <div>
//     {isLogin?(
//          <h1>helloo</h1>
//     ):(
//        <h1>hay</h1>
//     )}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// const App = () => {
//  const role="";
// switch(role){
//   case "admin":
//     return <h1>admin</h1>
//     case "user":
//       return   <h1>user</h1>
//       default:
//        return <h1>non</h1>
// }
// }

// export default App




// import  { useState } from 'react'
// const App = () => {
//   const [data,setdata]=useState({name:"shifa",age:19});
//   const handle=()=>{
//     setdata((prev)=>({
//        ...prev,
//       age:prev.age+1
//     }))
//   }
//   return (
//     <div>
//     <h1>{data.name}</h1>
//     <h1>{data.age}</h1>
//     <button onClick={handle}>click</button>
//     </div>
//   )
// }
// export default App


// ❌

// import  { useEffect, useState } from 'react'
// const App = () => {
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     let id=setInterval(()=>{
//        setCount((prev)=>prev+1)
//     },1000)
//     return ()=>clearInterval(id)
//   },[])
//   return (
//     <div>
//     <h1>count is:{count}</h1>
//     </div>
//   )
// }
// export default App


import React, { useState } from 'react'
const App = () => {
  const [color,setColor]=useState("pink");
  const handle=()=>{
        setColor((prev)=>{
         return prev==="pink"?"red":"pink"
        })
  }
  return (
    <div style={{background:color, height:"1000vh"}}>
        <button onClick={()=>handle()}>click</button>
    </div>
  )
}

export default App