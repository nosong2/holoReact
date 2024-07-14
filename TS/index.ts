type 내타입 = string | number
let mytype :내타입 = '123';


let 이름 :string = 'kim';
let 이름or넘버 :string | number = 123;
let 배열 :string[] = ['kim','park'];
let 오브젝트 :{name? : string } = { name : 'kim' };
// 이름 = 123;


function 함수(x : number) :number {
    return x * 2
}


type Member = [number, boolean];
let john:Member = [123, true]


type Member2 = {
    name : string
}

let john2 : Member2 = { name : '123' }


type Member3 = {
    [key : string] : string
    // [key : string] : 모든 object 속성 이라는 뜻
}

class User {
    name :string;
    constructor(name : string){
        this.name = name;
    }
}

