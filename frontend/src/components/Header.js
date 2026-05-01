import { Link } from "react-router-dom"
export default function Header(){
    return <header>
            <h1>RoomRent</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Rooms</Link>
                <Link to="/">Post Room</Link>
                <Link to="/">Login</Link>
            </nav>
        </header>
}