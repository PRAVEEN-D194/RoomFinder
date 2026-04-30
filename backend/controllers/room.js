const roomModel = require('../models/roomsModel');

//get all rooms api/v1/rooms
const getRooms = async (req, res, next) => {
    try{
    const rooms = await roomModel.find({});
    if(rooms.length === 0){
        res.status(405).json({
            success: false,
            message: "No rooms found or rooms are not available",
        });
    }
    res.json({
        success: true,
        rooms: rooms
    });
}catch(error){
    res.status(500).json({
        success: false,
        message: error.message
    });
}
}

//get single room api/v1/rooms/:id
const getSingleRoom = async (req, res, next) => {
    try{
    const room = await roomModel.find({_id:{$eq: req.params.id}});
    res.json({
        success: true,
        room: room
    });
}catch(error){
    res.status(404).json({
    success: false,
    message: error.message
});
}
}


//post room api/v1/rooms
const postRoom = async (req, res, next) => {
    try{
    const room = req.body;
    const createdRoom = await roomModel.create(room);
    res.json({
        success: true,
        message: "Room posted successfully",
    });
}catch(err){
    res.status(500).json({
        success: false,
        message: err.message,
    });
}
}

module.exports = {
    getRooms: getRooms,
    getSingleRoom: getSingleRoom,
    postRoom:postRoom,
}