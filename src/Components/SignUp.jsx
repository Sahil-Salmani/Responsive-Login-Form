import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [msg, setmsg] = useState("")
  const navigate = useNavigate();

  const handleinput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if("email" == name){
      setemail(value)
    }
    if("password" == name){
      setpassword(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(email == "" || password == ""){
      alert("Please Enter the detail")
    }else{
          const getdetail = JSON.parse(localStorage.getItem("user"));
    console.log(getdetail)
    const user = getdetail.find((curvalue) => {
    return curvalue.email === email && curvalue.password === password;
  });
    if (user) {
    alert("login successfully");
    setmsg("");
  } else {
    setmsg("Invalid email or password");
  }
  navigate("/")
    }

  }
  
  
  
  return (
    <>
    <Navbar/>
    <div>
      <p className='text-red-500 flex justify-center text-[18px]'>{msg}</p>
      <form onSubmit={handleSubmit} className='relative top-20 p-6 sm:p-10 w-full '>
        <div className='m-auto'>
            <h1 className='flex justify-center items-center text-2xl text-purple-950 font-bold mb-7'>Login</h1>
        </div>
        <div className=' flex flex-col w-96 gap-5 m-auto'>
            <input onChange={handleinput} className='border rounded-md focus:ring-2 focus:ring-purple-400 p-2' type="text" name='email' autoComplete="username" placeholder='Enter your email' />
            <input onChange={handleinput} className='border rounded-md focus:ring-2 focus:ring-purple-400 p-2' type="password" autoComplete="current-password" name='password' placeholder='Enter password' />
            <p>If you have to create account ? <a className='text-blue-700 underline text-[19px]' href="/signup">SignUp</a></p>
        </div>
        <div className='flex justify-center items-center mt-8'>
        <button className='bg-green-400 rounded-md text-white font-bold w-20 h-9 flex justify-center items-center'>
           Login
        </button>

        </div>
     </form>
    </div>
    </>
  )
}

export default SignUp
