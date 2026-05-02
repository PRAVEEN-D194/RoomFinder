import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search1(){
    const [keyword, setKeyword] = useState("");
    const [cost, setCost] = useState();
    const navigate = useNavigate();
    const searchHeader = ()=>{
        navigate(`/search1?keyword=${keyword}&cost=${cost}`);
    }
    return <div>
        <div className="search-box">
            <input type="text" placeholder="Search rent price..."  value={cost} onChange={(e)=>{setCost(e.target.value)}}/>

            <input type="text" placeholder="Search location..."  value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}/><br></br>
            <button onClick={searchHeader}>Search</button>
        </div>
        </div>
}