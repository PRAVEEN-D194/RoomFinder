import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search(){
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const searchHeader = ()=>{
        navigate(`/search?keyword=${keyword}`);
    }
    return <div>
        <div className="search-box">
            <input type="text" placeholder="Search location..."  value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}/><br></br>
            <button onClick={searchHeader}>Search</button>
        </div>
        </div>
}