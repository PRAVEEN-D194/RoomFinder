
import RoomDetails from "../components/roomdetials";
import './room.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Room() {

    const [room, setroom] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL + "/rooms/" + id)
        .then(res=>res.json())
        .then(res=>setroom(res.room))
    }, []);
    console.log(room);
    if(room !== null){
        console.log(room[0].title);
    }else{
        console.log("Room is null");
    }


    return room && <div className="room-container">
    <div className="room-left">
        <img src={`/images/${room[0].image}`} alt={room[0].title}/>
    </div>
    <div className="room-right">
        <h2>{room[0].title}</h2>
        <p><strong>📍 Location:</strong> {room[0].location}</p>
        <p><strong>💰 Rent:</strong> ₹{room[0].rent}/month</p>
        <p><strong>Advance:</strong> ₹{room[0].advance}</p>

        <p><strong>Nearby:</strong> {room[0].nearby}</p>
        <p><strong>Highlights:</strong> {room[0].highlights}</p>
        <p><strong>Owner:</strong> {room[0].owner}</p>
        <p><strong>Phone:</strong> {room[0].phone}</p>

        <h3>Description</h3>
        <p>{room[0].description}</p>

        <h3>Conditions</h3>
        <p>{room[0].conditions}</p>

        <h3>👍 Pros</h3>
        <p>{room[0].positive}</p>
        {/* <ul>
            {room[0].positive.map((pro, index) => <li key={index}>{pro}</li>)}
        </ul> */}

        <h3>👎 Cons</h3>
        <p>{room[0].negative}</p>
        {/* <ul>
            {room[0].negative.map((con, index) => <li key={index}>{con}</li>)}
        </ul> */}
    </div>
</div>
}