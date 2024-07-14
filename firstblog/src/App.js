import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  let post = '강남 우동 맛집';
  // 자료를 잠깐 저장할 땐 변수 사용
  // let, var, const

  let [글제목, setPost] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // let [post1, setPost1] = useState('남자 코트 추천');
  // let [post2, setPost2] = useState('강남 우동 맛집');
  // let [post3, setPost3] = useState('파이썬 독학');
  let [logo, setLogo] = useState('ReactBlog');
  // state문법
  // a = 남자 코트 추천
  // b = state 변경을 도와주는 함수

  // Q. 왜 state 써야함?
  // 일반 변수는 갑자기 변경되면 html에 자동으로 반영이 안됨.
  // 하지만, state는 갑자기 변경되면 html은 자동 재렌더링됨.
  // 변동시 자동으로  html에 반영되게 하고 싶으면 state 사용

  let [like, setLike] = useState([0,0,0]);
  // console.log(글제목.length)
  like.push(0)
  
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // 글제목.map(function(a, i){
  //   let [like, setLike] = useState(i)
  // })

  // function likeplus () {
  //   console.log(1)
  //   console.log(like)
  //   like = like + 1
  // }
  
  // state 변경하는 법
  // 1. 등호를 사용해서 하지 말 것
  // 2. 함수를 만들어서 작업해도 되지만, 안에서 직접 () => 변경함수 등을 사용해도 됨.
  
  let [modal, setModal] = useState(false);
  
  function toggleHandler (event) {
    {
      if (modal==false) {
        setModal(!modal)
      }
    }
    // setModal(!modal)
    // console.log(modal)
    setTitle(event)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ { color : 'red', fontSize : '16px' } }>
          { logo }</h4>
      </div>

          <button onClick={ () => {
            let copy = [...글제목];
            copy.sort();
            setPost(copy)
            console.log(copy)
            console.log(글제목)
          }}
          >가나다순정렬</button>

          <button onClick={ () => { 
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            setPost(copy);
            console.log(copy)
            console.log(글제목)
          }}>글수정</button>
      {/* <div className='list'>
        <h4 onClick={ () => { toggleHandler() }}>{ 글제목[0] }<span onClick={ () => { setLike(like + 1)} }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return <div className='list' key={i}>
          <h4 onClick={ () => { toggleHandler(i) }}>{ 글제목[i] }</h4>
          <span onClick={ (event) => { event.stopPropagation(); setLike(like + 1)} }>👍</span>
          {/* stopPropagation() - 상위 html로 퍼지는 이벤트 버블링을 막을때 사용 */}
           { like } 
          <p>2월 17일 발행</p>
          <button onClick={()=> {
            let copy = [...글제목]
            copy.splice(i, 1)
            setPost(copy)
            // setPost(글제목.filter(a => a !== 글제목[i]))
            // console.log(글제목.filter(a => a !== 글제목[i]))
            
          }}>삭제</button>


        </div>
          
        })
      }

      {
        modal == true ? <Modal post={글제목} day={글제목} color={'skyblue'} click={          <button onClick={ () => { 
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          setPost(copy);
          console.log(copy)
          console.log(글제목)
        }}>글수정</button>}
        title={title}
        modal={modal}
        setModal={setModal}
        /> : null
      }
      <input onChange={(event) => {
        입력값변경(event.target.value)
        {
          if (event.target.value == '남자') {
            toggleHandler()
            console.log('남자 코트 추천')
          }
        }
        console.log(event.target.value)
      }}></input>
        <button onClick={() => { 
          let copy = [...글제목]
          copy.unshift(입력값)
          // 앞에 추가
          setPost(copy.concat(입력값))
          // 배열 뒤에 추가
          // setPost(copy.push(입력값));
          // concat > 오리지널 값은 그대로 두고 새로운 값이 생김
          // push > 오리지널 값이 아예 바뀌어서 배열은 완전히 변함
        }}>추가</button>
        { 입력값 }
        <Modal2 post={글제목}></Modal2>

    </div>
  );
}


// 아래 Modal을 컴포넌트라고 함
// 컴포넌트 사용하는 유형
// 1. 반복적인 html 축약할때
// 2. 큰 페이지들 전환할때, 컴포넌트로 만들면 장점이 많음
// 3. 자주 변경되는 UI



function Modal(props) {
  return (
    <>
      <div className='modal' style={{background : props.color}}>
        <h4>{props.post[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        {props.click}
        <button onClick={()=> {props.setModal(!props.modal)}}>닫기</button>
      </div>
    </>
  )
}

// 동적인 UI 만드는 step
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성


class Modal2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return (
      <div>안녕 {this.state.name}
      {this.props.post}
      <button onClick={() => {
        this.setState({name:'song'})
        console.log(this.state)
      }}>버튼</button>
      </div>
    )
  }
}


export default App;
