import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [userinfo, setuserinfo] = useState({});
    const navigate = useNavigate();

    const onSub = async(e)=> {
    e.preventDefault();
    try{
      await axios.post(process.env.REACT_APP_API_URL+"/login", userinfo);
      alert("Welcome to ROOMFINDER");
      navigate('/home1');
    }catch(error){
      console.log(error);
      alert("login faild password or useremail is wrong!!");
    }
  }
    const setval=(e)=>{
      const name = e.target.name;
      setuserinfo((prev)=>{
        return {...prev, [name] : e.target.value}
      })
    }  

     const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f6f8"
    },

    form: {
      width: "350px",
      padding: "25px",
      background: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 15px gray",
      display: "flex",
      flexDirection: "column"
    },

    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#1b0b0b"
    },

    label: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#555"
    },

    input: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none"
    },

    button: {
      width: "100%",
      marginTop: "20px",
      padding: "10px",
      background: "#007bff",
      border: "none",
      color: "white",
      fontSize: "16px",
      borderRadius: "6px",
      cursor: "pointer"
    },

    text: {
      textAlign: "center",
      marginTop: "15px",
      fontSize: "14px"
    },

    link: {
      color: "#007bff",
      textDecoration: "none"
    }
  };

  return (<>
    <Header/>
    <div style={styles.container}>
      <form style={styles.form} onSubmit={onSub}>
        <h2 style={styles.heading}>Login</h2>

        <label style={styles.label}>Name</label>
        <input style={styles.input}  name="namename" type="text" onChange={setval} required/>

        <label style={styles.label}>Email</label>
        <input style={styles.input} name="useremail"type="email" onChange={setval} required/>

        <label style={styles.label}>Password</label>
        <input style={styles.input} name="password" type="password" onChange={setval} required/>

        <button style={styles.button} type="submit">
          Login
        </button>

        <p style={styles.text}>
          Don't have an account?{" "}
          <Link style={styles.link} to="/signup">
            Go to signup
          </Link>
        </p>
      </form>
    </div>
    </>
    );
}