import {useState, useEffect} from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


export default function Category(){
    const category=useLocation();
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
    
    const[newList,setNewList]=useState([]);
    function getNewList(){
        const temp=list.filter(each=>each.분류===category.state);
        setNewList(temp);
    }


    useEffect(()=>{
        getNewList();
    },[list,category.state]);


    return (
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