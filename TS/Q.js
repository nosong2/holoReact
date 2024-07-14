var 이름2 = 'kim';
var 나이 = 123;
var 출생지역 = '대구';
var 아이유 = { name: '아이유', song: '좋은날' };
아이유.name = '우와';
console.log(아이유);
function 내함수(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    else {
        // 가능하면 else도 작성해주는게 나음
    }
    // Narrowing 판정 문법
    // 1. in 
    // 2. instanceof
    // 3. typeof
    // 4. assertion (타입 덮어쓰기)
    array[0] = x;
    // assertion을 사용하면 if문을 안써도 됨
    // 여러 타입을 가진 경우, 하나의 타입으로 확정시킬 때 사용함.
    // 무슨 타입이 들어올지 100% 확실할 때 사용함.
}
내함수(123);
var 동물 = 123;
var 동물2 = { name: 'kim', age: 20 };
var con = {
    name: '사과'
};
console.log(con);
// con.name = '수박'
console.log(con);
var position = { x: 10, y: 20 };
console.log(position);
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3]
};
var test용 = {
    name: 'kim',
    phone: 123,
    email: 'abc@naver.com',
    adult: true,
};
// 리터럴 타입
// 사전에 들어올 문자를 정해서 엄격하게 규칙을 정할 수 있음
var 이름z;
이름z = 'park';
// 함수에 사용시, hello만 들어올 수 있음
function 함수3(a) {
    console.log(a);
}
함수3('hello');
function 함수2(a) {
    console.log(a);
    return [a];
}
var aaa = 함수2('바위');
console.log(aaa);
var 햄수 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 12,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
console.log(회원정보.plusOne(2));
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수('010-1111-2222', cutZero, removeDash);
function 만들함수1(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수1('010-1111-2222', cutZero, removeDash);
// 
var 제목 = document.querySelector('#title');
// 1. 
if (제목 !== null) {
    제목.innerHTML = '반가워요';
}
// 2. 
if (제목 instanceof Element) {
    제목.innerHTML = '방가워요';
}
// 3. as는 비상시, 100%확신때만 쓰셈
// let 제목 = document.querySelector('#title') as Element;
// 제목.innerHTML = '방가워요'
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = '반가워요';
    // 1. 제목에 innerHTML이 있으면 출력해주고
    // 2. 없으면 undefined 뱉음
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
// let 링크2 = document.querySelectorAll('.naver');
// 링크2.forEach((a)=>{
//   if (a instanceof HTMLAnchorElement){
//     a.href = 'https://kakao.com'
//   }
// })
var 링크3 = document.querySelectorAll('.naver');
console.log(링크3);
for (var i = 0; i < 3; i++) {
    var a = 링크3[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
}
// 
var Person = /** @class */ (function () {
    function Person(a) {
        this.data = 0;
        this.name = a;
    }
    Person.prototype.함슈 = function (a) {
        console.log('안녕' + a);
        return a;
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
console.log(사람1.data);
console.log(사람1.name);
console.log(사람2.name);
var 네모 = { color: 'red', width: 100 };
// interface 장점 : extends 로 복사 가능
var 학생 = { name: 'kim', score: 20 };
var 선생 = { name: 'kim', age: 20, score: 100 };
var 선생2 = { name: 'kim', age: 20 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000, card: false }, { product: '삼다수', price: 800, card: true }];
var 오브젝트11 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
