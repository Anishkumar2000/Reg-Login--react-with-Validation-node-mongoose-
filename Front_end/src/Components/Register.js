import React, {useState } from 'react';
import "./Register.css";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";

function Register() {
    const [name,setname] = useState("");
    const [namerr,setnamerr] = useState("");
    const [mail,setmail] = useState("");
    const [mailerr,setmailerr] = useState("");
    const [mobile,setmobile] = useState("");
    const [mobilerr,setmobilerr] = useState("");
    const [uname,setuname] = useState("");
    const [unamerr,setunamerr] = useState("");
    const [Password,setpassword] = useState("");
    const [passerr,setpasserr]=useState("");
    const [cpassword,setcpassword] = useState("");
    const [cpasserr,setcpasserr]=useState("");
    const navigate = useNavigate();

 
    const namehandle= (e)=>{
        
        let inval = e.target.value;
        var in_name = /^[A-za-z0-9]+$/;
        if(inval ==""){
            setnamerr("Please Enter Name");
        }
        else if (!in_name.test(inval)) {
            // console.log("no");
            setnamerr("Please Enter Only Characters");
        }
        else{
            // console.log("ok");
            setname(inval);
            setnamerr("");
        }
    };
    const mailhandle = (e)=>{
        let inval = e.target.value;
        var in_mail = /^([a-z0-9])+\@([a-z])+\.([a-z])+$/;
         if(inval ==""){
            setmailerr("Please Enter E-Mail ID");
        }
        else if (!in_mail.test(inval)) {
            // console.log("no");
            setmailerr("Please Enter Valid Mail ID");
        }
        else{
            // console.log("ok");
            setmail(inval);
            setmailerr("");
        };
    }
    const mobilehandle = (e)=>{
        let inval = e.target.value;
        // console.log(inval.length);
        var in_mob = /^[0-9]+$/;
        if (inval == "") {
            setmobilerr("Please Enter Your Phone Number");
        }
        else if(!in_mob.test(inval)){
            // console.log("no");
            setmobilerr("Please Enter Only Numbers");
        }
        else if (inval.length <10) {
            setmobilerr("Please Enter 10 Digits Phone Number");
        }
        else {
            setmobile(inval);
            // console.log("ok");
            setmobilerr("");
        }
    };

    const unamehandle = (e)=>{
        let inval = e.target.value;
        var in_uname = /^[A-za-z0-9]+$/;
        if(inval ==""){
            setunamerr("Please Enter User Name");
        }
        else if (!in_uname.test(inval)) {
            // console.log("no");
            setunamerr("Please Enter Only Characters");
        }
        else{
            // console.log("ok");
            setuname(inval);
            setunamerr("");
        }
    };

    const passhandle = (e)=>{
        let inval = e.target.value;
        var in_pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
        // var in_pass = /^[a-zA-Z0-9!@#$%^&*]$/;
        if (inval=="") {
            setpasserr("Please Enter Your Password");
        }
        else if (!in_pass.test(inval)) {
            setpasserr("please Enter Letters , Numbers , Special Characters");
        }
        else{
            setpassword(inval);
            setpasserr("");
        }

    };
    const cpasshandle = (e)=>{
        let inval = e.target.value;
        if (inval=="") {
            setcpasserr("Please Enter Your Confirm Password");
        }
        else if (inval !== Password) {
            setcpasserr("Confirm Password Not Same as Password");
        }
        else{
            setcpassword(inval);
            setcpasserr("");
        }
    };
    const submit = async()=>{
        const userdata = {
            name:name,
            mail:mail,
            mobile:mobile,
            uname:uname,
            Password:Password,
            cpassword:cpassword
        };
        
        await axios.post("http://localhost:7001/add",userdata).then((res)=>{
            // console.log(res.data);
            navigate("/login");
        });
    };
   
  return (
    <div className='container df fd jc ac'>
        <div className='reg_box df fd jc ac '>
            <div className='reg_head df jc ac'>
                <h3>Register</h3>
            </div>
            <div className='reg_content df js fd'>
                <div className='reg_field df fd jc'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter Your Name' onChange={(e)=>{namehandle(e)}}/>
                <p>{namerr}</p>
                </div>
                <div className='reg_field df fd jc'>
                <label htmlFor='mail'>E-Mail ID</label>
                <input type='text' id='mail'  placeholder='Enter Your E-Mail ID' onChange={(e)=>{mailhandle(e)}}/>
                <p>{mailerr}</p>
                </div>
                <div className='reg_field df fd jc'>
                <label htmlFor='phone'>Phone Number</label>
                <input type='number' id='phone'  Value={mobile} placeholder='Enter Your Phone Number' onChange={(e)=>{mobilehandle(e)}}/>
                <p>{mobilerr}</p>
                </div>
                <div className='reg_field df fd jc'>
                <label htmlFor='username'>User Name</label>
                <input type='text' id='uname'  placeholder='Enter Your user Name' onChange={(e)=>{unamehandle(e)}}/>
                <p>{unamerr}</p>
                </div>
                <div className='reg_field df fd jc'>
                <label htmlFor='pass'>Password</label>
                <input type='text' id='pass'  placeholder='Enter Your Password' onChange={(e)=>{passhandle(e)}}/>
                <p>{passerr}</p>
                </div>
                <div className='reg_field df fd jc'>
                <label htmlFor='Con_pass'>Confirm Password</label>
                <input type='text' id='pass'  placeholder='Enter Your Confirm Password' onChange={(e)=>{cpasshandle(e)}}/>
                <p>{cpasserr}</p>
                </div>
            </div>
            <div className='reg_btn df fd g jc ac'>
                <button className='btn green' onClick={submit}>Submit</button>
                <div className='df g jc ac'>
                <h4>Do You Have Account ?</h4><Link to={"/login"}><h4>Login</h4></Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Register;