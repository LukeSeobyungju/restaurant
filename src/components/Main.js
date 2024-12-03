import { Link } from "react-router-dom";
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Main(){
    
    const [value,setValue]=useState('');
    function onchange(e){
        setValue(e.target.value);
    }
    
    return(
        <>
            <div>
                <Row>
                    <Col xs={4}>
                        <img src="into2_nb.png" id="logo" alt="logo"></img>
                        <img src="into2_name.png" id="logo2" alt="logo"></img>
                    </Col>
                    <Col xs={6} id="searchBox">
                        <InputGroup className="mb-3">
                            <Form.Control onChange={onchange}/>
                            <Button variant="outline-secondary" id="button-addon2">
                                <Link to='/search' state={value}>검색</Link>
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
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

                </Row>
            </div>  
            
        </>
    );
}