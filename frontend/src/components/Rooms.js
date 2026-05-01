import {Link} from 'react-router-dom';

export default function Rooms({room}){
    return <div className="room-card">
        <Link to={`/rooms/${room._id}`}>
        <img src={`/images/${room.image}`} alt={room.title}/>
        </Link>
            <h3>{room.title}</h3>
            <p>📍 {room.location}</p>
            <p>{room.rent}/month</p>
            <Link to={`/rooms/${room._id}`}>
              <button>View Details</button>
            </Link>
          </div>
    }