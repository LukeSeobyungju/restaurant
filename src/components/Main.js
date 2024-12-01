import { Link } from "react-router-dom";
import { useState } from "react";

export default function Main(){
    
    const [value,setValue]=useState('');
    function onchange(e){
        setValue(e.target.value);
    }
    
    return(
        <>
            <div>
                <img src="into2_nb.png" id="logo"></img>
                <img src="into2_name.png" id="logo2"></img>
                <input type="text" id="search" onChange={onchange}/>
                <button><Link to='/search' state={value}>검색</Link></button>
            </div>
            <div>
                <button><Link to='/category' state={"물회"}>물회</Link></button>
                <button><Link to='/category' state={"횟집"}>횟집</Link></button>
                <button><Link to='/category' state={"한식"}>한식</Link></button>
                <button><Link to='/category' state={"일식"}>일식</Link></button>
                <button><Link to='/category' state={"양식"}>양식</Link></button>
                <button><Link to='/category' state={"기타"}>기타</Link></button>
            </div>
            <div>

            </div>
            <div>

            </div>
            
            
        </>
    );
}