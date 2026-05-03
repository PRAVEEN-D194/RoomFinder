import "./pRoom.css";
import { useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import { toast } from "react-toastify";
export default function InsertRoom() {
  // const [title, settitle] = useState("");
  // const [location, setlocation] = useState("");
  // const [rent, setrent] = useState(0);
  // const [nearby, setnearby] = useState("");
  // const [highlights, sethighlights] = useState("");
  // const [ownername, setownername] = useState("");
  // const [description, setdescription] = useState("");
  // const [advance, setadvance] = useState(0);
  // const [positive, setpositive] = useState("");
  // const [negative, setnegaitive] = useState("");
  // const [image, setimage] = useState(null);
  // const [phone, setphone] = useState(0);

  const [form, setform] = useState({});

  const navigate = useNavigate();
  const onsubmited = async(e)=> {
    e.preventDefault();
    try{
      await axios.post(process.env.REACT_APP_API_URL+"/rooms", form);
      // alert("Inserted Successfully!! Goto Home page!!");
      toast("Inserted Successfully!!",{
        style: {
    background: "green",
    color: "white",
  },
      });
      navigate('/home1');
    }catch(error){
      console.log(error);
    }
  }
  
  function setimg(e){
    const name = e.target.name;
    const value = e.target.value.split(/[/\\]/).pop();
    setform((prev)=>{return{
      ...prev,[name]:value
    }})

  }
  function onset(e){
    const name = e.target.name;
    setform((prev)=>{return{
      ...prev, [name] : e.target.value
    }})
  }
  return (<>
  <Header1/>
  <h1 id="h1">Add Your Room Details</h1>
  <form onSubmit={onsubmited}>
      <label>Title</label>
      <input onChange={onset} required className="input" type="text" name="title" /><br></br>

      <label>Location</label>
      <input onChange={onset}  required className="input" type="text" name="location" /><br></br>

      <label>Rent</label>
      <input onChange={onset} required className="input" type="number" name="rent" /><br></br>

      <label>Nearby</label>
      <input onChange={onset} required className="input" type="text" name="nearby" /><br></br>

      <label>Highlights</label>
      <input onChange={onset} required className="input" type="text" name="highlights"/><br></br>

      <label>Owner Name</label>
      <input onChange={onset} required  className="input" type="text" name="ownername" /><br></br>

      <label>Description</label>
      <input className="input" required type="text" name="description" /><br></br>

      <label>Advance</label>
      <input onChange={onset} required className="input" type="number" name="advance" /><br></br>

      <label>Positive</label>
      <input onChange={onset} required className="input" type="text" name="positive" /><br></br>

      <label>Negative</label>
      <input  onChange={onset} required className="input" type="text" name="negative" /><br></br>

      <label>Image</label>
      <input onChange={setimg} required className="input" type="file" name="image" /><br></br>

      <label>Phone</label>
      <input  onChange={onset} required className="input" type="number" name="phone" /><br></br>
      
      <button id="button"  type="submit">Submit</button>
    </form>
    </>
  );
}