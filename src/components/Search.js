import {useState, useEffect} from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CgArrowLeft } from "react-icons/cg";
import {FaStar} from "react-icons/fa";
import { CiStar } from "react-icons/ci";

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

    const highlight=(text,keyword)=>{
        const parts=text.split(keyword);
        return parts.map((part,index)=>(
            <span>
                {part}
                {index<parts.length-1&&<sapn style={{fontWeight:'bold'}}>{keyword}</sapn>}
            </span>
        ));
    }

    useEffect(()=>{
        getNewList();
    },[list,keyword.state]);


    function check(each){
        //const[user,setUser]=useState([]);
        fetch(API.concat("/"+each.id),{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                ...each,
                star: !each.star,
            }),
        })
        .then((response)=>{
            if(response.ok){
                setNewList((prev) =>
                    prev.map((item) =>
                        item.id === each.id ? { ...item, star: !each.star } : item
                    )
                );
            }
        })
        .catch((error) => console.error(error));
    };

    return(
        <>
            <Row id="headerBar">
                    <Col id="logos" xs={7}>
                        <div class="top">
                            <img src="into2_nb.png" id="logo" alt="logo"></img>
                            <img src="into2_name.png" id="logo2" alt="logo"></img>
                        </div>
                    </Col>
            </Row>
            <Row id="back"></Row>
            <Row>
                
            </Row>
            <Container>
                <button id="backButton"><Link to='/main'><CgArrowLeft id="backicon" size="30"/></Link></button>
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>상호명</th>
                        <th>주소</th>
                        <th>좌석수</th>
                        <th>영업시간</th>
                        <th>찜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newList.map((each,index)=>
                            <tr>
                            <td>{index+1}</td>
                            <td><Link to='/detail' state={each.상호명} style={{textDecoration:'none', color:'black'}}>{highlight(each.상호명,keyword.state)}</Link></td>
                            <td>{each.주소}</td>
                            <td>{each.좌석수}</td>
                            <td>{each.영업시간}</td>
                            {each.star?<td><FaStar onClick={() => check(each)}/></td>:<td><CiStar onClick={() => check(each)}/></td>}
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}