import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const userDetail = {
        name : "",
        email :"",
        password: ""
    }

    const [data, setdata] = useState(userDetail)
    const navigate = useNavigate()

    const handleinput = (event) => {
      console.log(event.target.value);
      console.log(event.target.name);
      const name = event.target.name;
      const value = event.target.value;
      setdata({...data , [name]:value})
    
    }
    console.log(data)

    const handleSubmit = (event) => {
      event.preventDefault();

      if(data.name == "" || data.email == "" || data.password == ""){

        alert("please enter the detal!")
      }else{
 const getdata = JSON.parse(localStorage.getItem("user") || "[]")
      let arr = [];
      arr = [...getdata];
      arr.push(data);
      localStorage.setItem("user" , JSON.stringify(arr));
      alert("SignUp successfully")
      navigate("/LogIn")
      }
    }
    
    

  return (
    <>
    <Navbar/>
   <div className=''>
     <form onSubmit={handleSubmit} className='relative top-20 p-6 sm:p-10 w-full'>
        <div className='m-auto'>
            <h1 className='flex justify-center items-center text-2xl text-purple-950 font-bold mb-7'>Sign Up</h1>
        </div>
        <div className=' flex flex-col w-96 gap-5 m-auto'>
            <input className='border rounded-md p-2' type="text" name='name' placeholder='Enter your name' onChange={handleinput}/>
            <input className='border rounded-md p-2' type="email" name='email'  autoComplete="username" placeholder='Enter your email' onChange={handleinput}/>
            <input className='border rounded-md p-2' type="password" name='password' autoComplete="current-password" placeholder='Enter password' onChange={handleinput}/>
            <p>already have an accound? <a className='text-blue-700 underline text-[19px]' href="/LogIn">LogIn</a></p>
        </div>
        <div className='flex justify-center items-center mt-8'>
        <button className=' bg-green-400 rounded-md text-white font-bold w-20 h-9 flex justify-center items-center'>
            SignUp
        </button>

        </div>
     </form>
   </div>
   </>
  )
}

export default Login    