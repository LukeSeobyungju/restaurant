import {useState, useEffect} from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';


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
                <Table striped>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>상호명</th>
                            <th>주소</th>
                            <th>영업시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newList.map((each)=>
                                <tr>
                                <td>#</td>
                                <td>{each.상호명}</td>
                                <td>{each.주소}</td>
                                <td>{each.영업시간}</td>
                                </tr>
                            )}  
                        </tbody>
                    </Table>
            </div>
        </>
    );
}