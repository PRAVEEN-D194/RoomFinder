import Header from "../components/Header1.js"
import Userpro from "../components/Userpro.js"
import { Fragment, useEffect, useState } from "react"

export default function Userprofile() {

    const [rooms, setRooms] = useState([]);
    const user = JSON.parse(localStorage.getItem("userinfo"));
    const email = user.useremail;
    const name = user.username;
    const roomcount = rooms.length;
        useEffect(() => {
            fetch(process.env.REACT_APP_API_URL + "/profile/" + user.useremail)
                .then(res => res.json())
                .then(res => setRooms(res.user))
        }, [])

        const styles = {
  container: {
    width: "350px",
    margin: "30px auto",
    padding: "20px",
    background: "#f4f6f8",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center"
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "15px"
  },
  text: {
    fontSize: "18px",
    color: "#333",
    margin: "8px 0"
  },
  highlight: {
    color: "#007bff",
    fontWeight: "600"
  }
};


    return (
        <Fragment>
            <Header />
                <div style={styles.container}>
                <h2 style={styles.heading}>User Profile</h2>

                <p style={styles.text}>
                    UserName : <span style={styles.highlight}>{name}</span>
                </p>

                <p style={styles.text}>
                    Useremail : <span style={styles.highlight}>{email}</span>
                </p>

                <p style={styles.text}>
                    Post Room Count : <span style={styles.highlight}>{roomcount}</span>
                </p>
                </div>
            <section className="rooms">
                {rooms.map(room => <Userpro room={room} />)}
            </section>
        </Fragment>
    );

}