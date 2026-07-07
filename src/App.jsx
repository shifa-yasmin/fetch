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


import React, { useEffect } from 'react'
import { useState } from 'react'
const App = () => {
  const [name,setName]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setName(data)
    })
  },[])
  return (
    <div>
    {name.map((n)=>(
      <p>{n.name}</p>
    ))}
    </div>
  )
}

export default App