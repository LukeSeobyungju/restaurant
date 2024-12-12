import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CgArrowLeft } from "react-icons/cg";

export default function CRUD(){
    const api = "https://6728190f270bd0b97554559c.mockapi.io/my_data/restaurant";

    const reset={
        id: "",
        분류: "",
        상호명: "",
        주소: "",
        영업시간: "",
        휴무일: "",
        좌석수: "",
        업체소개: "",
        주차정보: "",
        메뉴: "",
        star: false,
    };

    const [user, setUser] = useState(reset);
    var idd;
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        getData();
    },[])

    const getData=()=>{
        axios.get(api)
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handelInput=(event)=>{
        event.preventDefault();
        const{name,value}=event.target;
        setUser({...user,[name]:value});
        console.log(JSON.stringify(user));
    }

//ADD
    const handelSubmit=async(event)=>{
        event.preventDefault();
        console.log(user);
        const response = await fetch(api,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(user),
        });
        setUser(reset);
    }
//ADD

//DEL
    const handelSubmit2=async(event)=>{
        await getData();
        for(var i=0;i<list.length;i++){
            if(list[i].상호명===user.상호명) idd=i+1;
        }
        console.log(idd);
        event.preventDefault();
        fetch(api.concat("/"+idd),{
            method:'DELETE',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        })
        setUser(reset);
    }
//DEL

//EDIT
    const handelSubmit3=async(event)=>{
        await getData();
        for(var i=0;i<list.length;i++){
            if(list[i].상호명===user.상호명) idd=i+1;
        }
        console.log(idd);
        event.preventDefault();
        fetch(api.concat("/"+idd),{
            method:'PUT',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        })
        setUser(reset);
    }
//EDIT

//LIST
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [visible,setVisible]=useState('hidden');

    const navigate=useNavigate();

    function click(){
        getData();
        setVisible('visible');
    }

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
                
                <Button variant="success" onClick={handleShow}>
                    추가
                </Button>
                <Button variant="warning" onClick={handleShow3}>
                    수정
                </Button>
                <Button variant="danger" onClick={handleShow2}>
                    삭제
                </Button>
                <Button variant="primary" onClick={click}>
                    목록
                </Button>
                <br/>
                <div style={{padding:'20px', visibility:visible}}>
                    {list.map((each)=>(<li>{each.상호명}</li>))}
                </div>
                    

            
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>ADD</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label for="분류" className="form-label">분류</label>
                        <input type="text" className="form-control" name="분류" value={user.분류} onChange={handelInput} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="상호명" className="form-label">상호명</label>
                        <input type="text" className="form-control" name="상호명" value={user.상호명} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="주소" className="form-label">주소</label>
                        <input type="text" className="form-control" name="주소" value={user.주소} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="영업시간" className="form-label">영업시간</label>
                        <input type="text" className="form-control" name="영업시간" value={user.영업시간} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="휴무일" className="form-label">휴무일</label>
                        <input type="text" className="form-control" name="휴무일" value={user.휴무일} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="좌석수" className="form-label">좌석수</label>
                        <input type="text" className="form-control" name="좌석수" value={user.좌석수} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="업체소개" className="form-label">업체소개</label>
                        <input type="text" className="form-control" name="업체소개" value={user.업체소개} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="주차정보" className="form-label">주차정보</label>
                        <input type="text" className="form-control" name="주차정보" value={user.주차정보} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="메뉴" className="form-label">메뉴</label>
                        <input type="text" className="form-control" name="메뉴" value={user.메뉴} onChange={handelInput} />
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            ADD
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>
            </Modal>


            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                <Modal.Title>DELETE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handelSubmit2}>
                    <div className="mb-3">
                        <label for="상호명" className="form-label">상호명</label>
                        <input type="text" className="form-control" name="상호명" value={user.상호명} onChange={handelInput} />
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose2}>
                            DELETE
                        </Button>
                    </Modal.Footer>
                </form>
                </Modal.Body>
            </Modal>


            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                <Modal.Title>EDIT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={handelSubmit3}>
                <div className="mb-3 mt-3">
                        <label for="상호명" className="form-label">상호명</label>
                        <input type="text" className="form-control" name="상호명" value={user.상호명} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="분류" className="form-label">분류</label>
                        <input type="text" className="form-control" name="분류" value={user.분류} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="주소" className="form-label">주소</label>
                        <input type="text" className="form-control" name="주소" value={user.주소} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="영업시간" className="form-label">영업시간</label>
                        <input type="text" className="form-control" name="영업시간" value={user.영업시간} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="휴무일" className="form-label">휴무일</label>
                        <input type="text" className="form-control" name="휴무일" value={user.휴무일} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="좌석수" className="form-label">좌석수</label>
                        <input type="text" className="form-control" name="좌석수" value={user.좌석수} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="업체소개" className="form-label">업체소개</label>
                        <input type="text" className="form-control" name="업체소개" value={user.업체소개} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="주차정보" className="form-label">주차정보</label>
                        <input type="text" className="form-control" name="주차정보" value={user.주차정보} onChange={handelInput} />
                    </div>
                    <div className="mb-3">
                        <label for="메뉴" className="form-label">메뉴</label>
                        <input type="text" className="form-control" name="메뉴" value={user.메뉴} onChange={handelInput} />
                    </div>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose3}>
                            SAVE
                        </Button>
                    </Modal.Footer>
                </form>
                </Modal.Body>
            </Modal>
        </>
    );
}