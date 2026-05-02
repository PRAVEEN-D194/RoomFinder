import {Link} from 'react-router-dom';
function oncl(){
  alert("Please log in first to access the details.")
}
export default function Rooms({room}){
    return <div className="room-card">
        <Link to={`/login`} onClick={oncl}>
        <img src={`/images/${room.image}`} alt={room.title}/>
        </Link>
            <h3>{room.title}</h3>
            <p>📍 {room.location}</p>
            <p>{room.rent}/month</p>
            <Link to={`/login`}>
              <button onClick={oncl}>View Details</button>
            </Link>
          </div>
    }