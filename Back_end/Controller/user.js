const users = require("../DB/regmodel");
const router = require("express").Router();

const add = async(req,res)=>{
    const {name,mail,mobile,uname,Password,cpassword}=req.body;
    const adduser = await users.create({
        name:name,
        mail:mail,
        mobile:mobile,
        username:uname,
        password:Password,
        cpassword:cpassword
    });
    return res.json(adduser);
};

const user = async(req,res)=>{
    const getuser = await users.findOne({_id:req.params.id});
    return res.json(getuser);
}

const check = async(req,res)=>{
    const {uname,password}=req.body;
    const checkuser = await users.findOne({username:uname,password:password});
    return res.json(checkuser);
};


module.exports = {add,check,user};
// module.exports = router;