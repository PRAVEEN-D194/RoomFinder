import Rooms from "../components/Rooms.js"
import { Fragment, useEffect, useState } from "react"
import Search from "../components/search.js";
import { useSearchParams } from "react-router-dom";

export default function Home(){

    const [rooms, setRooms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL + "/rooms" + '?' + searchParams.toString())
        .then(res => res.json())
        .then(res => setRooms(res.rooms))
    }, [searchParams])

    return <Fragment>
        

        <section className="hero">
            <h2>Find Your Perfect Room</h2>
        </section>

        <Search/>

        <section className="rooms">
            {rooms.map(room =><Rooms room={room}/>)}
        </section>
        
        </Fragment>
    
}