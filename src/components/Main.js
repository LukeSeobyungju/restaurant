import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { CardTitle } from "react-bootstrap";

export default function Main(bgcolor = "gray") {

    // 검색창 입력 값 저장
    const [value, setValue] = useState('');
    function onchange(e) {
        setValue(e.target.value);
    }

    const [list, setList] = useState([]);
    const API = "https://6728190f270bd0b97554559c.mockapi.io/my_data/restaurant";
    const getData = () => {
        axios.get(API)
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // 각 카테고리별 필터링된 목록
    const [newList, setNewList] = useState([]);
    const [newList2, setNewList2] = useState([]);
    const [newList3, setNewList3] = useState([]);
    const [newList4, setNewList4] = useState([]);
    const [newList5, setNewList5] = useState([]);
    const [newList6, setNewList6] = useState([]);

    function getNewList() {
        const temp = list.filter(each => each.분류 === "물회");
        setNewList(temp);
    }
    function getNewList2() {
        const temp = list.filter(each => each.분류 === "횟집");
        setNewList2(temp);
    }
    function getNewList3() {
        const temp = list.filter(each => each.분류 === "한식");
        setNewList3(temp);
    }
    function getNewList4() {
        const temp = list.filter(each => each.분류 === "일식");
        setNewList4(temp);
    }
    function getNewList5() {
        const temp = list.filter(each => each.분류 === "양식");
        setNewList5(temp);
    }
    function getNewList6() {
        const temp = list.filter(each => each.분류 === "기타");
        setNewList6(temp);
    }

    function getRandom(length) {
        return parseInt(Math.random() * length);
    }

    // 랜덤 추천 항목을 상태로 저장
    const [recommendations, setRecommendations] = useState({
        물회: "",
        횟집: "",
        한식: "",
        일식: "",
        양식: "",
        기타: ""
    });

    // 랜덤 추천을 새로 고침 시에만 변경
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getNewList();
        getNewList2();
        getNewList3();
        getNewList4();
        getNewList5();
        getNewList6();
    }, [list]);

    // 추천 항목을 랜덤으로 설정
    useEffect(() => {
        if (newList.length > 0 && newList2.length > 0 && newList3.length > 0 && newList4.length > 0 && newList5.length > 0 && newList6.length > 0) {
            setRecommendations({
                물회: newList[getRandom(newList.length)].상호명,
                횟집: newList2[getRandom(newList2.length)].상호명,
                한식: newList3[getRandom(newList3.length)].상호명,
                일식: newList4[getRandom(newList4.length)].상호명,
                양식: newList5[getRandom(newList5.length)].상호명,
                기타: newList6[getRandom(newList6.length)].상호명
            });
        }
    }, [newList, newList2, newList3, newList4, newList5, newList6]);


    const[myList,setMyList]=useState([]);
    function getMyList(){
        const temp=list.filter(each=>each.star===true);
        setMyList(temp);
    }
    useEffect(()=>{
        getMyList();
    },[list]);

    return (
        <>
            <Container fluid>
                <Row id="headerBar">
                    <Col id="logos" xs={4}>
                        <div className="top">
                            <img src="into2_nb.png" id="logo" alt="logo"></img>
                            <img src="into2_name.png" id="logo2" alt="logo"></img>
                        </div>
                    </Col>
                    <Col xs={8} id="searchBox">
                        <InputGroup className="mb-3">
                            <Form.Control onChange={onchange} value={value} />
                            <Button variant="outline-secondary" id="button-addon2">
                                <Link to='/search' state={value}><FaSearch /></Link>
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
                <Row id="welcome">
                    <h2>당신을 위한</h2>
                    <h1><strong>포항</strong> 추천 맛집</h1>
                </Row>

                <Row className="cards">
                    <Col xs={3} style={{ margin: '0 5px 0 50px' }}>
                        <Card id="cardsh">
                            <Card.Header id="head">#물회</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <img src="물회.jpg" id="사진" alt="물회"></img>
                                </Card.Text>
                                <Button id="more"><Link to='/category' state={"물회"} id="more">자세히 보기</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card id="cardsh">
                            <Card.Header id="head">#횟집</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <img src="횟집.jpg" id="사진" alt="횟집"></img>
                                </Card.Text>
                                <Button id="more"><Link to='/category' state={"횟집"} id="more">자세히 보기</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card id="cardsh">
                            <Card.Header id="head">#한식</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <img src="한식.jpg" id="사진" alt="한식"></img>
                                </Card.Text>
                                <Button id="more"><Link to='/category' state={"한식"} id="more">자세히 보기</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2} id="reco" style={{ margin: '0 0 0 30px' }}>
                        <Card id="cardsh">
                            <Card.Header id="head">*추천*</Card.Header>
                            <Card.Title id="recos"> 물회 - {recommendations.물회}</Card.Title>
                            <Card.Title id="recos"> 횟집 - {recommendations.횟집}</Card.Title>
                            <Card.Title id="recos"> 한식 - {recommendations.한식}</Card.Title>
                            <Card.Title id="recos"> 일식 - {recommendations.일식}</Card.Title>
                            <Card.Title id="recos"> 양식 - {recommendations.양식}</Card.Title>
                            <Card.Title id="recos"> 기타 - {recommendations.기타}</Card.Title>
                        </Card>
                    </Col>
                </Row>

                <Row className="cards">
                    <Col xs={3} style={{ margin: '0 5px 0 50px' }}>
                        <Card id="cardsh">
                            <Card.Header id="head">#일식</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <img src="일식.jpg" id="사진" alt="일식"></img>
                                </Card.Text>
                                <Button id="more"><Link to='/category' state={"일식"} id="more">자세히 보기</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card id="cardsh">
                            <Card.Header id="head">#양식</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <img src="양식.jpg" id="사진" alt="양식"></img>
                                </Card.Text>
                                <Button id="more"><Link to='/category' state={"양식"} id="more">자세히 보기</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card id="cardsh">
                            <Card.Header id="head">#기타</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <img src="기타.jpg" id="사진" alt="기타"></img>
                                </Card.Text>
                                <Button id="more"><Link to='/category' state={"기타"} id="more">자세히 보기</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={2} id="reco" style={{ margin: '0 0 0 30px' }}>
                        <Card id="cardsh">
                            <Card.Header id="head">*즐겨찾기*</Card.Header>
                            <CardTitle id="recos">{myList.map((each)=><li>{each.상호명}</li>)}</CardTitle>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
}
