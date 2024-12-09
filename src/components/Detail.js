import {useState, useEffect} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CgArrowLeft } from "react-icons/cg";


export default function Detail(){
    const selected=useLocation();
    const [list,setList]=useState([]);
    const [user,setUser]=useState();
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
    const getDetail=()=>{
        for(var i=0;i<list.length;i++) if(list[i].상호명===selected.state) setUser(list[i]);
        
    }
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        getDetail();
    }, [list]);

    const navigate=useNavigate();

    return (
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
                <button id="backButton" onClick={()=>navigate(-1)}><CgArrowLeft id="backicon" size="30"/></button>
                <Table striped>
                    <thead>
                        <tr>
                        <th>{user?user.상호명:''}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>분류: {user?user.분류:''}</tr>
                        <tr>주소: {user?user.주소:''}</tr>
                        <tr>영업시간: {user?user.영업시간:''}</tr>
                        <tr>좌석수: {user?user.좌석수:''}</tr>
                        <tr>메뉴: {user?user.메뉴:''}</tr>
                        <tr>휴무일: {user?user.휴무일:''}</tr>
                        <tr>주차정보: {user?user.주차정보:''}</tr>
                        <tr>업체소개: {user?user.업체소개:''}</tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}