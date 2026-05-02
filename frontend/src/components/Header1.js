import { Link } from "react-router-dom"
export default function Header(){
    function logout(){
        alert("has been logged out");
    }
    return <header>
            <h1>RoomRent</h1>
            <nav>
                <Link to="/home1">Home</Link>
                <Link to="/postroom">Post Room</Link>
                <Link to="/" onClick={logout}>LogOut</Link>
            </nav>
        </header>
}