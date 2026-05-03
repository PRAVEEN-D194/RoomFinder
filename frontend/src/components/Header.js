import { Link } from "react-router-dom"
import { toast } from "react-toastify";
export default function Header(){
    function oncl(){
        // alert("please Login/SignUp first!!!");
        toast.error("please Login/SignUp first!!!",{
                    position: "top-center",
                    autoClose: 5000,
                })
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