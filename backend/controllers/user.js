const userModel = require("../models/userModel.js")
const bcrypt = require("bcrypt");

const getUser = async(req, res, next)=>{
    try{
    const { useremail, password } = req.body;
    console.log(useremail, password);
    const user = await userModel.findOne( {useremail});
    if(!user){
        res.status(404).json({
            success:false,
            message:"user not fund"
        })
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        res.status(505).json({
            success:false,
            message:"password not correct"
        })
    }
        res.status(200).json({
            success:true,
            message:"welcome user"
        })
}catch(error){
    res.status(500).json({
            success:false,
            message:error.message
        })
};
}

const postUser = async(req, res, next)=>{
    try{
        const {username, useremail, password} = req.body;
        const hashpassword = await bcrypt.hash(password, 10);
        const newuser = {
            username,
            useremail,
            password:hashpassword
        }
        await userModel.create(newuser);
        res.json({
        success: true,
        message: "user posted successfully",
    });
    }catch(error){
        res.status(500).json({
        success: false,
        message: error.message,
    });
    };
}

module.exports = {getUser:getUser, postUser:postUser};