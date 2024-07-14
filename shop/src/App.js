import { Button, Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import data from './routes/data.js'
import Detail from './routes/Detail.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Eventone from './event/eventone.js';
import Eventtwo from './event/eventtwo.js';
import axios from 'axios';
// import bg from './img/bg.png'
import loading from './img/loading.gif'
import Cart from './routes/Cart.js'


export let Context1 = createContext()


function App() {

  let obj = {name: 'Song'}
  localStorage.setItem('data', JSON.stringify(obj))
  let localdat = localStorage.getItem('data')
  
  
  let watched = JSON.parse(localStorage.getItem('watched'))
  useEffect(()=>{
    let watched = JSON.parse(localStorage.getItem('watched'))
    if (watched.length === 0) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])
  // 참고사항
  // 모든 state를 localStorage에 자동 저장?
  //  redux-persist : 외부라이브러리, redux 스토어 한에 있던 스테이트를 로컬스토리지에 자동저장함



  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();
  let [clickitem, setClickitem] = useState(2);
  let [itembox] = useState([10, 11, 12])

  
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/s')}}>Features</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div>
              최근 본 상품
              {/* {
                watched.map((a, i) => {
                  return (
                    // console.log(shoes)
                    <p key={i}>
                    <img src={'https://codingapple1.github.io/shop/shoes'+ (i+1) +'.jpg'} width="10%" />
                    <hr></hr>
                    {shoes[i].title}
                    </p>
                  )
                })
                // console.log(watched)
              } */}
            </div>
              <Container>
                <Row>
                  {
                    shoes.map((a, i) => {
                      return (
                        <Col md={4} key={i}>
                          <Link to={`/detail/${i}`} className='link-style'>
                            <Shoeslist shoes={shoes} i={i} />
                          </Link>
                        </Col>
                      )
                    })
                  }
                </Row>
              </Container>
                  <button onClick={() => {
                    <div>
                      <img src='./img/loading.gif'></img>
                    </div>
                    {
                      if (clickitem < 4) {
                        axios.get(`https://codingapple1.github.io/shop/data${clickitem}.json`)
                        .then((daa)=> {
                        let copy = [...shoes, ...daa.data]
                        setShoes(copy)
                        setClickitem(clickitem + 1)
                        console.log(copy)
                      })
                      .catch(() => {
                        console.log('실패함')
                      })
                    } else {
                      alert('상품 이제 더 없음ㅋㅋ')
                      }
                    }
                    // - axios post 요청 하는법
                    // axios.post('/url',{name: 'kim'})

                    // - 동시에 ajax 요청 여러개 하는법
                    // Promise.all([ axios.get('url1'), axios.get('url2')])
                    // .then(()=> {
                    // })
                    // 두개 다 성공했을때 수행함

                }}>더보기</button>
          </>
              }/>
              {
                shoes.map((a, i) => {
                  return (
                    <Route path={`/detail/${i}`} element={
                      <Context1.Provider value={{itembox, shoes}}>
                        <Detail shoes={shoes} i={i}/>
                      </Context1.Provider>
                    } key={i}/>

                  )
                })
              }
              <Route path="/cart" element={<Cart/>}/>
              <Route path='*' element={<div>빈페이지</div>} />
              <Route path='/event' element={<About />}>
                <Route path='one' element={<Eventone />}/>
                <Route path='two' element={<Eventtwo />}/>
              </Route>
      </Routes>
    </div>
  );
}

function Shoeslist(props) {
  return (
    <Col>
      
    <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" />
    <h4>{props.shoes[props.i].title}</h4>
    <p>{props.shoes[props.i].content}</p>
    <p>{props.shoes[props.i].price}원</p>
    </Col>
  )
}

function About() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
