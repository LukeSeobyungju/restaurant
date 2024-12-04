import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import {FaSearch} from "react-icons/fa";
import axios from "axios";

export default function Main(){
    
    //검색창 입력 값 저장
    const [value,setValue]=useState('');
    function onchange(e){
        setValue(e.target.value);
    }


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
        const temp=list.filter(each=>each.분류==="물회");
        setNewList(temp);
    }
    const[newList2,setNewList2]=useState([]);
    function getNewList2(){
        const temp=list.filter(each=>each.분류==="횟집");
        setNewList2(temp);
    }
    const[newList3,setNewList3]=useState([]);
    function getNewList3(){
        const temp=list.filter(each=>each.분류==="한식");
        setNewList3(temp);
    }
    const[newList4,setNewList4]=useState([]);
    function getNewList4(){
        const temp=list.filter(each=>each.분류==="일식");
        setNewList4(temp);
    }
    const[newList5,setNewList5]=useState([]);
    function getNewList5(){
        const temp=list.filter(each=>each.분류==="양식");
        setNewList5(temp);
    }
    const[newList6,setNewList6]=useState([]);
    function getNewList6(){
        const temp=list.filter(each=>each.분류==="기타");
        setNewList6(temp);
    }
    
    useEffect(()=>{
        getNewList();
        getNewList2();
        getNewList3();
        getNewList4();
        getNewList5();
        getNewList6();

    },[list]);

    function getRandom(length){
        return parseInt(Math.random()*length);
    }
    
    
    return(
        <>
        <Container fluid>
        <Row id="headerBar">
                <Col id="logos" xs={4}>
                    <div class="top">
                        <img src="into2_nb.png" id="logo" alt="logo"></img>
                        <img src="into2_name.png" id="logo2" alt="logo"></img>
                    </div>
                </Col>
                <Col xs={8} id="searchBox">
                    <InputGroup className="mb-3">
                        <Form.Control onChange={onchange}/>
                        <Button variant="outline-secondary" id="button-addon2">
                            <Link to='/search' state={value}><FaSearch/></Link>
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row id="back"></Row>
            <Row id="menuBar">
                <Col>
                    <button id="button"><Link to='/category' state={"물회"} id="menu">물회</Link></button>
                </Col>
                <Col>
                    <button id="button"><Link to='/category' state={"횟집"} id="menu">횟집</Link></button>
                </Col>
                <Col>
                    <button id="button"><Link to='/category' state={"한식"} id="menu">한식</Link></button>
                </Col>
                <Col>
                    <button id="button"><Link to='/category' state={"일식"} id="menu">일식</Link></button>
                </Col>
                <Col>
                    <button id="button"><Link to='/category' state={"양식"} id="menu">양식</Link></button>
                </Col>
                <Col>
                    <button id="button"><Link to='/category' state={"기타"} id="menu">기타</Link></button>
                </Col>     
            </Row>

            <Row className="cards">
                <Col xs={3}></Col>
                <Col xs={3}>
                    <Card>
                        <Card.Header>#물회</Card.Header>
                        <Card.Body>
                            <Card.Title>{newList.length>0 ? newList[getRandom(newList.length)].상호명:""}</Card.Title>
                            <Card.Text>
                                <img src="물회.jpg" id="사진"></img>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">자세히 보기</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Header>#횟집</Card.Header>
                        <Card.Body>
                            <Card.Title>{newList2.length>0 ? newList2[getRandom(newList2.length)].상호명:""}</Card.Title>
                            <Card.Text>
                            <img src="횟집.jpg" id="사진"></img>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">자세히 보기</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Header>#한식</Card.Header>
                        <Card.Body>
                            <Card.Title>{newList3.length>0 ? newList3[getRandom(newList3.length)].상호명:""}</Card.Title>
                            <Card.Text>
                            <img src="한식.jpg" id="사진"></img>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">자세히 보기</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="cards">
                <Col xs={3}></Col>
                
                <Col xs={3}>
                    <Card>
                        <Card.Header>#일식</Card.Header>
                        <Card.Body>
                            <Card.Title>{newList4.length>0 ? newList4[getRandom(newList4.length)].상호명:""}</Card.Title>
                            <Card.Text>
                            <img src="일식.jpg" id="사진"></img>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">자세히 보기</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Header>#양식</Card.Header>
                        <Card.Body>
                            <Card.Title>{newList5.length>0 ? newList5[getRandom(newList5.length)].상호명:""}</Card.Title>
                            <Card.Text>
                            <img src="양식.jpg" id="사진"></img>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">자세히 보기</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <Card.Header>#기타</Card.Header>
                        <Card.Body>
                            <Card.Title>{newList6.length>0 ? newList6[getRandom(newList6.length)].상호명:""}</Card.Title>
                            <Card.Text>
                            <img src="기타.jpg" id="사진"></img>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">자세히 보기</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                
        </Container>
                     
        </>
    );
}