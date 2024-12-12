import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { FaSearch, FaStar } from "react-icons/fa"; 
import axios from "axios";
import { Modal } from "react-bootstrap"; 

export default function Main() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [myList, setMyList] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null); 
    const [showModal, setShowModal] = useState(false); 

    const onchange = (e) => {
        setValue(e.target.value);
    };

    const API = "https://6728190f270bd0b97554559c.mockapi.io/my_data/restaurant";
    const getData = () => {
        axios.get(API)
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getMyList = () => {
        const temp = list.filter(each => each.star === true);
        setMyList(temp);
    };

    const getRandom = (length) => {
        return parseInt(Math.random() * length);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getMyList();
    }, [list]);
    
    const [ran,setRan]=useState();
    useEffect(() => {
        if(list.length>0) setRan(list[getRandom(list.length)]);
    }, [list]);

    const handleUnbookmark = (restaurant) => {
        axios.put(`${API}/${restaurant.id}`, { ...restaurant, star: false })
            .then(response => {
                setMyList(prevList => prevList.filter(item => item.id !== restaurant.id));
                setShowModal(false); 
            })
            .catch(error => {
                console.log("찜 취소 실패:", error);
            });
    };

    const handleShowModal = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedRestaurant(null); 
    };

    const navigate=useNavigate();

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
                        <Button variant="outline-secondary" id="button-addon2" onClick={()=>navigate('/search',{state:value})}>
                            <FaSearch />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row id="back"></Row>
            <Row id="menuBar">
                <Col>
                    <button className="button"><Link to='/category' state={"물회"} id="menu">물회</Link></button>
                </Col>
                <Col>
                    <button className="button"><Link to='/category' state={"횟집"} id="menu">횟집</Link></button>
                </Col>
                <Col>
                    <button className="button"><Link to='/category' state={"한식"} id="menu">한식</Link></button>
                </Col>
                <Col>
                    <button className="button"><Link to='/category' state={"일식"} id="menu">일식</Link></button>
                </Col>
                <Col>
                    <button className="button"><Link to='/category' state={"양식"} id="menu">양식</Link></button>
                </Col>
                <Col>
                    <button className="button"><Link to='/category' state={"기타"} id="menu">기타</Link></button>
                </Col>
            </Row>
            <Row id="welcome">
                <h2>당신을 위한</h2>
                <h1><strong>포항</strong> 추천 맛집</h1>
            </Row>
            
            <Row>
                <Col xs={10} style={{paddingRight:0}}>
                    <Row className="cards">
                        <Col xs={4}>
                            <Card className="cardsh">
                                <Card.Header className="head">#물회</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <img src="물회.jpg" id="사진" alt="물회"></img>
                                    </Card.Text>
                                    <Button id="more"><Link to='/category' state={"물회"} id="more">자세히 보기</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card className="cardsh">
                                <Card.Header className="head">#횟집</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <img src="횟집.jpg" id="사진" alt="횟집"></img>
                                    </Card.Text>
                                    <Button id="more"><Link to='/category' state={"횟집"} id="more">자세히 보기</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card className="cardsh">
                                <Card.Header className="head">#한식</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <img src="한식.jpg" id="사진" alt="한식"></img>
                                    </Card.Text>
                                    <Button id="more"><Link to='/category' state={"한식"} id="more">자세히 보기</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="cards">
                        <Col xs={4}>
                            <Card className="cardsh">
                                <Card.Header className="head">#일식</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <img src="일식.jpg" id="사진" alt="일식"></img>
                                    </Card.Text>
                                    <Button id="more"><Link to='/category' state={"일식"} id="more">자세히 보기</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card className="cardsh">
                                <Card.Header className="head">#양식</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <img src="양식.jpg" id="사진" alt="양식"></img>
                                    </Card.Text>
                                    <Button id="more"><Link to='/category' state={"양식"} id="more">자세히 보기</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <Card className="cardsh">
                                <Card.Header className="head">#기타</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <img src="기타.jpg" id="사진" alt="기타"></img>
                                    </Card.Text>
                                    <Button id="more"><Link to='/category' state={"기타"} id="more">자세히 보기</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} style={{paddingLeft:0}}>
                    <Row>
                        <Col style={{ margin: '30px 10px 0 30px' }}>
                            <Card className="cardsh">
                                <Card.Header className="head"><button onClick={()=>navigate('/bookmark')} style={{border:0,fontWeight:'bold',color:'#3D3D3D'}}>*즐겨찾기*</button></Card.Header>
                                <Card.Body>
                                    {myList.length > 0 ? myList.map((each) => (
                                        <li
                                            key={each.id}
                                            onClick={() => handleShowModal(each)} 
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {each.상호명}
                                        </li>
                                    )) : "즐겨찾기가 없습니다."}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ margin: '0px 10px 0 30px' }}>
                            <Card className="cardsh">
                                <Card.Header className="head"><button onClick={()=>navigate('/detail',{state:ran.상호명})} style={{border:0,fontWeight:'bold',color:'#3D3D3D'}}>*랜덤추천*</button></Card.Header>
                                <Card.Body id="recos"> {ran?
                                `${ran.상호명}\n${ran.영업시간}\n${ran.주소}\n${ran.메뉴}`.split('\n').map((each)=>(<p>{each}</p>))
                                :0}</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col id="footer">
                    made by seolck_ & d0rit0ss<br/> 
                    2024-2 oss final
                </Col>
            </Row>
        </Container>

        {selectedRestaurant && (
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRestaurant.상호명}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>주소:</strong> {selectedRestaurant.주소}</p>
                    <p><strong>좌석수:</strong> {selectedRestaurant.좌석수}</p>
                    <p><strong>영업시간:</strong> {selectedRestaurant.영업시간}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button 
                        variant="danger"
                        onClick={() => handleUnbookmark(selectedRestaurant)}
                        style={{
                            backgroundColor: 'white',
                            color: 'black',
                            border: 'none',
                            padding: '5px',
                            margin: '0 375px 0 0'
                        }}
                    >
                        <FaStar style={{ color: 'black' }} />
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )}
    </>
    );
}
