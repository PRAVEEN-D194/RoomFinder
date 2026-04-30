const getRooms = (req, res, next) => {
    res.json({
        success: true,
        message: "Rooms fetched successfully",
    });
}
const getSingleRoom = (req, res, next) => {
    res.json({
        success: true,
        message: "Single room fetched successfully",
    });
}

const postRoom = (req, res, next) => {
    res.json({
        success: true,
        message: "Room posted successfully",
    });
}

module.exports = {
    getRooms: getRooms,
    getSingleRoom: getSingleRoom,
    postRoom:postRoom,
}