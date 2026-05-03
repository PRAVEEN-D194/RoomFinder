import {Link} from 'react-router-dom';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';




export default function Userpro({room}){

const user = JSON.parse(localStorage.getItem("userinfo"));
const email = user.useremail;
const navigate = useNavigate();
const onsubmited = async(id)=> {
    try{
      await axios.delete(process.env.REACT_APP_API_URL+"/profile/"+ id);
      // alert("Inserted Successfully!! Goto Home page!!");
        navigate(`/home1`);
      toast("Deleted Successfully!!",{
        style: {
        background: "lightblue",
        color: "red",
  },
      });
  
    }catch(error){
      console.log(error);
    }
  }
  
    return <div className="room-card">
        <Link to={`/rooms/${room._id}`}>
        <img src={`/images/${room.image}`} alt={room.title}/>
        </Link>
            <h3>{room.title}</h3>
            <p>📍 {room.location}</p>
            <p>{room.rent}/month</p>
            <Link to={`/rooms/${room._id}`}>
              <button >View Details</button>
            </Link>
            <button onClick={() => onsubmited(room._id)}
  style={{
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px"
    
  }}
>
  DELETE
</button>
          </div>
    }