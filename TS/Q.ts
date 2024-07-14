let 이름2 = 'kim';
const 나이 = 123;
const 출생지역 = '대구';

const 아이유 = { name : '아이유', song : '좋은날'}

아이유.name = '우와';
console.log(아이유)

function 내함수 (x : number | string) {
    let array :number[] = [];
    if (typeof x === 'number') {
        array[0] = x;
    } else {
        // 가능하면 else도 작성해주는게 나음
    }
    // Narrowing 판정 문법
    // 1. in 
    // 2. instanceof
    // 3. typeof
    // 4. assertion (타입 덮어쓰기)
    array[0] = x as number;
    // assertion을 사용하면 if문을 안써도 됨
    // 여러 타입을 가진 경우, 하나의 타입으로 확정시킬 때 사용함.
    // 무슨 타입이 들어올지 100% 확실할 때 사용함.
    
}

내함수(123);



type Animal = string | number | undefined;

let 동물 :Animal = 123;

// 

type Animal2 = { name : string, age : number }

let 동물2 :Animal2 = { name : 'kim', age : 20 }

// 

type fru = {
    // const는 수정이 불가능하지만, Object 유형에서는 수정이 가능함
    // readonly를 사용하면 수정 안되게 할 수 잇음 아래 수박 참고
    // readonly : 읽기전용이 되어버림
    readonly name : string
}

const con :fru = {
    name : '사과'
}

console.log(con)

// con.name = '수박'

console.log(con)


// 아래같은 형식으로 타입을 합칠 수 있음 

type Name = string;

type Age = number;

type person = Name | Age;


// 

type PositionX = { x : number };
type PositionY = { y : number };

// { x : number, y : number } 같은 형태가 됨
type NewType = PositionX & PositionY

let position : NewType = { x : 10, y : 20}
console.log(position)

type MyType = {
    color? :string
    size :number
    readonly position :number[]
}

let 테스트용변수 :MyType = {
    size : 123,
    position : [1,2,3]
}

type suk2 = {
    name :string
    phone :number
    email :string
}

type suk3 = {
    adult :boolean
}

type Newtest = suk2 & suk3;

let test용 :Newtest = { 
    name : 'kim', 
    phone : 123, 
    email : 'abc@naver.com',
    adult : true,
}


// 리터럴 타입
// 사전에 들어올 문자를 정해서 엄격하게 규칙을 정할 수 있음

let 이름z :'kim'|'park';
이름z = 'park'

// 함수에 사용시, hello만 들어올 수 있음
function 함수3(a :'hello'){
    console.log(a)
}
함수3('hello')



function 함수2(a :'가위'|'바위'|'보') :('가위'|'바위'|'보')[] {
    console.log(a)
    return [a]
}
let aaa = 함수2('바위')

console.log(aaa)

// function 같은거임

type 함수타입 = (a : string) => number;

type 함수타입2 = (a : number) => number;

let 햄수 :함수타입 = function (a) {
    return 10
}

// 


type Memberr = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
}

let 회원정보 :Memberr = {
    name : 'kim',
    age : 12,
    plusOne(a) {
        return a + 1
    },
    changeName : () => {}
}


console.log(회원정보.plusOne(2))


/*
숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
*/ 


// js로 작성

type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

function 만들함수(a, func1, func2){
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2)
  }
만들함수('010-1111-2222', cutZero, removeDash)

// 타입으로 변경


type 함수타입11 = (a :string) => string;
type 함수타입21 = (a :string) => number;

function 만들함수1(a :string, func1 :함수타입11, func2 :함수타입21){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
만들함수1('010-1111-2222', cutZero, removeDash)




// 

let 제목 = document.querySelector('#title');

// 1. 
if (제목 !== null) {
    제목.innerHTML = '반가워요'
}

// 2. 
if (제목 instanceof Element) {
    제목.innerHTML = '방가워요'
}

// 3. as는 비상시, 100%확신때만 쓰셈
// let 제목 = document.querySelector('#title') as Element;
// 제목.innerHTML = '방가워요'

if (제목?.innerHTML != undefined) {
    제목.innerHTML = '반가워요'
    // 1. 제목에 innerHTML이 있으면 출력해주고
    // 2. 없으면 undefined 뱉음
}


let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'
}


let 버튼 = document.querySelector('#button')
버튼?.addEventListener('click', function() {
    
})


let 이미지 = document.querySelector('#image')
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg'
}


// let 링크2 = document.querySelectorAll('.naver');

// 링크2.forEach((a)=>{
//   if (a instanceof HTMLAnchorElement){
//     a.href = 'https://kakao.com'
//   }
// })



let 링크3 = document.querySelectorAll('.naver');
console.log(링크3)

for (let i = 0; i < 3; i++){
  let a = 링크3[i];
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
} 

// 

class Person {
    data :number = 0;
    name : string;

    constructor(a) {
        this.name = a;
    }

    함슈(a :string):string{
        console.log('안녕' + a)
        return a
    }
}


let 사람1 = new Person('kim');
let 사람2 = new Person('park');

console.log(사람1.data)
console.log(사람1.name)
console.log(사람2.name)


// 

type Square =  { 
    color : string,
    width : number
}

// class 만드는 법과 유사함
// type과 차이점 있음

interface Square2 { 
    color : string;
    width : number
}

let 네모 = { color : 'red', width : 100}



// 
type Animals = { name : string }
type Cat = { age : number } & Animals



// 
interface Student {
    name : string
}

interface Student {
    score : number
}

interface Teacher extends Student {
    age : number
}

// interface 장점 : extends 로 복사 가능

let 학생 :Student = { name : 'kim', score : 20 }
let 선생 :Teacher = { name : 'kim', age : 20, score : 100 }
let 선생2 :Cat = { name : 'kim', age : 20 }

// type 과 interface 차이점
// 1. interface 는 중복선언 가능
// type 은 중복선언 불가능
// 외부라이브러리는 interface를 많이 씀, 이유 : 속성 추가같은게 쉬워서 그럼



// 숙제
/* 
let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

무슨 타입일지는 알아서 기입합시다. 
*/ 

interface Product {
    brand : string;
    serialNumber : number,
    model : string[]
}

let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }


/*
let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
오늘 배운 interface 문법을 써봅시다.

*/ 

interface Card {
    card : boolean;
}

interface Cart extends Card {
    product : string;
    price : number;
}

let 장바구니 :Cart[] = [ { product : '청소기', price : 7000, card : false }, { product : '삼다수', price : 800, card : true } ] 

/*
(숙제4) object 안에 함수를 2개 넣고 싶은데요 

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

이 object 자료를 어떻게 만들면 될까요? 

interface를 이용해서 object에 타입지정도 해보십시오. 

 */ 


interface MathObj {
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
  }
  
  let 오브젝트11 :MathObj = {
    plus(a,b){
      return a + b
    },
    minus(a,b){
      return a - b
    }
  } 