
import { useNavigate } from 'react-router-dom';


import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import TextField from './TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import { useStroreContext } from '../contextApi/ContextApi';

const Login = () => {

  const navigate = useNavigate();
  const [loader , setLoader] = useState(false);

  const {setToken} = useStroreContext();

const {
  register,
  handleSubmit,
  reset,
  formState: { errors }  
} = useForm({
  defaultValues: {
    name: "",
    email: "",
    password: "",
  },
  mode:"onTouched"
});

const LoginHandler= async(data)=>{

  setLoader(true);
  try {
const {data: response} = await api.post("/api/auth/public/login", data);


// store the token in local storage

console.log(response.token);
setToken(response.token);
localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));



toast.success("Login  Successful!");
 reset();
navigate("/");


  }  catch (error) {
    console.log(error);
    toast.error("Login Failed!");
  }finally{
    setLoader(false);
  } 
};

  return (
    <div

className='min-h[calc(100vh-64px)] flex justify-center items-center '>

<form onSubmit={handleSubmit(LoginHandler)}

className='sm-w-[400px] w-full p-4 border border-slate-300 rounded-lg flex flex-col gap-4'>


<h2 className='text-2xl font-bold text-center'>Login here </h2>


<div className="flex flex-col gap-3">


<TextField
label="UserName"
id="username"
type="text"
placeholder="Enter your username"
register={register}
required={true}
message="username  is required"
errors={errors}
/>

{/* <TextField
label="Email"
id="email"
type="email"
placeholder="Enter your email"
register={register}
required={true}
message="Email is required"
errors={errors}
/> */}

<TextField
label="Password"
id="password"
type="password"
placeholder="Enter your password"
register={register}
required={true}
min={6}
message="Password is required"
errors={errors}
/>

 <button 
            disabled={loader}
            type='submit'
            className='w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-purple-700 hover:to-pink-600 transition'>
            {loader ? "Loading..." : "Login"}
          </button>



          <p className='text-center text-sm font-medium'>
Don't have an Account ? <Link
to="/register">
   <span className='text-purple-600 font-semibold'> Signup </span> </Link>
          </p>
</div>


</form>

    
    </div>
  )
}

export default Login
