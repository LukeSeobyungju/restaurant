import {useState, useEffect} from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function Search(){
    const [list,setList]=useState([]);
    const API="https://6728190f270bd0b97554559c.mockapi.io/my_data/restaurant";
    const getData=()=>{
        axios.get(API)
        .then((response)=>{
            setList(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        getData();
    },[]);

    const keyword=useLocation();
    const[newList,setNewList]=useState([]);
    function getNewList(){
        const temp=list.filter(each=>each.상호명.includes(keyword.state));
        setNewList(temp);
    }


    useEffect(()=>{
        getNewList();
    },[list,keyword.state]);

    return(
        <>
            <div>
                <button><Link to='/main'>뒤로가기</Link></button>
                {newList.map((each)=>
                    <li>{each.상호명}</li>
                )}
            </div>
        </>
    );
}