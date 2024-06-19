import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./home.css"


function Home() {
    const [user,setuser] = useState({});
    const {id} = useParams();
    const getuser = async()=>{
        await axios.get(`http://localhost:7001/${id}`).then((res)=>{
            setuser(res.data);
            // console.log(res.data);
        });
    };
    useEffect(()=>{
        getuser();

    },[]);
  return (
    <>
    <div className='container df jc ac'>
        <div className='h_box df fd js ac w '>
          <h3>{user.name}</h3>
          <h3>{user.mail}</h3>
          <h3>{user.mobile}</h3>
        </div>
    </div>
    </>
  )
};

export default Home;