const roomModel = require('../models/roomsModel');

const getuserprofile = async(req,res,next)=>{
    try{
        const email = req.params.email;
        console.log(email);
        if(email){
        const user = await roomModel.find({useremail :email});
            res.json({
            success: true,
            user: user
        });
        }else{
                res.status(500).json({
                    success:true,
                    user:null
                })
            }
    }
    catch(error){
        res.status(404).json({
                success:false,
                user:null
            })
    }
}

const deleteroom = async(req, res, next)=>{
    try{
        const id = req.params.id;
        console.log(id);
        await roomModel.findByIdAndDelete(id);
        res.json({ success: true });
    }catch(error){
        console.log(req.params.id);
        res.status(404).json({
                success:false,
            })
    }
}

module.exports = {getuserprofile : getuserprofile, deleteroom:deleteroom}