import Rooms1 from "../components/Rooms1.js"
import { Fragment, useEffect, useState } from "react"
import Search1 from "../components/search1.js";
import { useSearchParams } from "react-router-dom";
import Header1 from "../components/Header1.js"

export default function Home(){

    const [rooms, setRooms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL + "/rooms" + '?' + searchParams.toString())
        .then(res => res.json())
        .then(res => setRooms(res.rooms))
    }, [searchParams])

    return <Fragment>
        
        <Header1/>
        <section className="hero">
            <h2>Find Your Perfect Room</h2>
        </section>
        <Search1/>

        <section className="rooms">
            {rooms.map(room =><Rooms1 room={room}/>)}
        </section>
        </Fragment>
    
}