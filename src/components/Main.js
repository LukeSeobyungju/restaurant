import { Link } from "react-router-dom";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import {FaSearch} from "react-icons/fa";

export default function Main(){
    
    const [value,setValue]=useState('');
    function onchange(e){
        setValue(e.target.value);
    }
    
    return(
        <>

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
                        <button><Link to='/category' state={"물회"}>물회</Link></button>
                    </Col>
                    <Col>
                        <button><Link to='/category' state={"횟집"}>횟집</Link></button>
                    </Col>
                    <Col>
                        <button><Link to='/category' state={"한식"}>한식</Link></button>
                    </Col>
                    <Col>
                        <button><Link to='/category' state={"일식"}>일식</Link></button>
                    </Col>
                    <Col>
                        <button><Link to='/category' state={"양식"}>양식</Link></button>
                    </Col>
                    <Col>
                        <button><Link to='/category' state={"기타"}>기타</Link></button>
                    </Col>     
                </Row>
                <Row>

                </Row>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <Card>
                                <Card.Header>#물회</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">자세히 보기</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <Card>
                                <Card.Header>#물회</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">자세히 보기</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <Card>
                                <Card.Header>#물회</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">자세히 보기</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <Card>
                                <Card.Header>#물회</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">자세히 보기</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <Card>
                                <Card.Header>#물회</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">자세히 보기</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>          
        </>
    );
}