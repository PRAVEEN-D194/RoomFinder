import { Link } from "react-router-dom"
import { toast } from "react-toastify";
export default function Header(){
    function logout(){
        //alert("has been logged out");
        toast.info("has been logged out",{
            position: "bottom-right",
            autoClose: 3000,
        })
    }

    const user = JSON.parse(localStorage.getItem("userinfo"));
    const email = user.useremail;

    return <header>
            <h1>RoomRent</h1>
            <nav>
                <Link to="/home1">Home</Link>
                <Link to="/postroom">Post Room</Link>
                <Link to='/profile/:email'>profile</Link>
                <Link to="/" onClick={logout}>LogOut</Link>
            </nav>
        </header>
}