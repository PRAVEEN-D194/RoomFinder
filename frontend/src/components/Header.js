import { Link } from "react-router-dom"
export default function Header(){
    function oncl(){
        alert("please Login/SignUp first!!!");
    }
    return <header>
            <h1>RoomRent</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login" onClick={oncl}>Post Room</Link>
                <Link to="/login">Login/SignUp</Link>
            </nav>
        </header>
}