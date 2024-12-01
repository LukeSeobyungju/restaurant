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
                <img src="into.png" id="logo"></img>
                <input type="text" id="search" onChange={onchange}/>
                <button><Link to='/test' state={value}>검색</Link></button>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            
            
        </>
    );
}