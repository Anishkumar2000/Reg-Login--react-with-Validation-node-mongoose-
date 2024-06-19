import React, { useState } from 'react'
import { Link , useNavigate} from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {

  const [val,setval] = useState({});
  const [id,setid] = useState("");
  const navigate = useNavigate();

  const uname = (e) => {
    setval({...val,[e.target.id]:e.target.value});
  };
  const pass = (e) => {
    setval({...val,[e.target.id]:e.target.value});
  }

 
  const submit = async() => {
    // console.log(val);
    axios.post("http://localhost:7001/check",val).then((res)=>{
      // console.log(res.data);
      if (res.data == null) {
        alert("Please Check User Name And Password");
      }
      else{
        const {_id} =  res.data;
        navigate(`/Home/${_id}`);
      }
    });
  }

 
  return (
    <div className='container df fd jc ac'>
      <div className='log_box df fd jc ac'>
        <div className='log_head df jc ac' >
          <h3>Login</h3>
        </div>
        <div className='log_content df fd js ac'>
          <div className='log_field df fd js'>
            <label htmlFor='uname'>User Name</label>
            <input type='text' id='uname' placeholder='Enter Your User Name' onChange={(e) => { uname(e) }} />
          </div>
          <div className='log_field df fd js '>
            <label htmlFor='Password'>Password</label>
            <input type='text' id='password' placeholder='Enter Your Password' onChange={(e) => { pass(e) }} />
          </div>
        </div>
        <div className='log_btn df fd js ac'>
        {/* <Link to={`/Home/:${id}`}><button className='btn green' onClick={submit}>Login </button></Link> */}
        <button className='btn green' onClick={submit}>Login </button>
          <div className='df jc ac g'>
          <h4>If You don't have an Account ?</h4><Link to={"/"}><h4>Register</h4></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login;