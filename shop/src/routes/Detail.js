import { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "./../App.js";
import { addCartItem } from './../store.js';
import { useDispatch } from "react-redux";


let Yellowbtn = styled.button`
background : ${ (props) => props.$bgc };
color : ${ props => props.bgc == 'blue' ? 'white' : 'black' };
padding : 10px;  
`
let Blackbox = styled.div`
  background : black;
  padding : 20px;
  color : white;
  `
  
  // class Detail2 extends React.Component {
//   componentDidMount(){

//   }
//   componentDidUpdate(){
  
//   }
//   componentWillUnmount(){
  
//   }
// }


function Detail(props) {
  
  let [count, setCount] = useState(0)
  let [alerts, setAlerts] = useState(true)
  let [num, setNum] = useState('')
  let [tab, setTab] = useState(0)
  let [fade2, setFade2] = useState('')

  let itembox = useContext(Context1)

      
  let dispatch = useDispatch()


  useEffect(()=> {
    let watched = JSON.parse(localStorage.getItem('watched'))
    watched.push(props.shoes[props.i].id)
    watched = new Set(watched)
    watched = Array.from(watched)
    localStorage.setItem('watched', JSON.stringify(watched))
  })

//   useEffect(() => {
//     // console.log('안녕')
//     // 실행시점 : html랜더링이 다 되고 나서 실행이 됨.
//     // 1. 어려운 연산
//     // 2. 서버에서 데이터 가져오는 작업
//     // 3. 타이머 장착

//     // for ( var i = 0; i < 10000; i++) {
//     //   console.log(1);
//     // }
//     let a = setTimeout(()=> {
//       setAlert(false)
  
//     },2000)
//     console.log(1)

//     return () => {
//       clearTimeout(a)
//       // useEffect가 동작하기 전에 먼저 작동하는 return 코드
//       // 보통 코드가 겹쳐서 실행되기 때문에 기존 코드를 제거해주세요 하는 코드를 많이 작성함.
//       // 데이터를 가져오는 도중에 재 랜더링이 되어서 또 요청하는 것을 방지함.
//       // clean up function 은 mount 시 실행안됨, unmount시 실행됨
//     }
//   }, [alert]
// // alert 라는 변수가 변경이 될때 실행이 됨.
// // , [] 로 작성하면 1회만 실행됨,
// )

useEffect(() => {
  if (isNaN(num) == true) {
    alert('숫자입력하세요')
  }
}, [num])

useEffect(()=> {  })
// 1. 재 랜더링마다 코드를 실행하고 싶음
useEffect(()=> {  }, [])
// 2. mount시 1회 코드실행하고 싶으면
useEffect(()=> { 
  return () => {
    // 3. unmount시 1회 코드실행하고 싶으면
  }
}, [])
// 4. useEffect 실행전에 뭔가 실행하려면 언제나 return() => {}


  // let {id} = useParams();

useEffect(()=> {
  setFade2('end')
  return ()=> {
    setFade2('')
  }
})

  
    return (
      <div className={`container start ${fade2}`}>
        {
          alert == true
          ?
          <div className="alert alert-warning">2초이내 구매시 할인</div>
          :
          null
        }
        <Yellowbtn $bgc="blue" onClick={() => { setCount(count+1)}}>버튼</Yellowbtn>
        <Yellowbtn $bgc="red">버튼</Yellowbtn>
        <Yellowbtn $bgc="orange">버튼</Yellowbtn>
        <Blackbox>박스</Blackbox>
    <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%" />
      </div>
      <div className="col-md-6">
        {
          <input onChange={ (event) => { 
            if (isNaN(event.target.value) === true) {
              alert('숫자입력하세요');
              event.target.value=''
            }
          }}></input>
        }
        <h4 className="pt-5">{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].content}</p>
        <p>{props.shoes[props.i].price}원</p>
        <button className="btn btn-danger" onClick={()=> { 
          dispatch(addCartItem({id : props.i, name : props.shoes[props.i].title, count : 1}))
         }}>주문하기</button> 
      </div>
    </div>
    <Nav variant="tabs"  defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=> {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=> {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=> {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    {
    }
    <TabContent tab={tab} shoes={props.shoes}/>
  </div> 
    )
  }
  function TabContent ({tab, shoes}) {
    // if (tab == 0) {
    //   return <div>내용0</div>
    // } else if (tab == 1) {
    //   return <div>내용1</div>
    // } else if (tab == 2) {
    //   return <div>내용2</div>
    // }
    // if문 안쓰고 작성하기도 가능 아래 참고

    let [fade, setFade] = useState('')
    let {itembox} = useContext(Context1)

    useEffect(()=> {
      setFade('')
      let startend = setTimeout(()=> {setFade('end')}, 100)
      // clearTimeout(startend)
      // return () => {
        // setFade('')
      // }
    },[tab])

    return <div className={`start ${fade}`}>
      { [<div>{shoes[0].title}</div>, <div>{itembox}</div>, <div>내용2</div>][tab] }
      </div>
  }

  // 자식의 자식에게 물려줄때,
  // 1. props
  // 2. Context API
  // 3. Redux(외부라이브러리)
    

export default Detail;