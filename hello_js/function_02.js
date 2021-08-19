// JS 에서는 변수, 상수, 함수는 사용하기 전에 
// 먼저 선언하라 
const 함수1 = function(){
    console.log("기본 함수 선언하기");
}

// ES6+ 에서 권장하는 화살표 함수 선언하기
const 함수2 = ()=>{
    console.log("Arrow, 화살표 함수 선언하기");
}

// 매개변수가 있는 함수 선언하기
const 함수3 = function(num1, num2){
    console.log(num1, num2, num1+num2);
}

함수3(100, 200);
함수3();

const 함수4 = (num1, num2) =>{
    console.log(num1, num2, num1+num2);
}

// 매개변수가 1개만 있는 화살표 함수 선언하기
// prettier가 적용이 안된다면 다음과 같이 선언할 수 있다
const 함수5 = num1 =>{};

const 리턴함수1 = function(){
    return 300;
}

let ret1 = 리턴함수1();
console.log(ret1);

const 리턴함수2 = ()=>{
    return 500;
}

// 화살표 함수의 매우 특별한 선언
// 함수 내부의 return 명령문 한개만 있는 경우
// 다른 명령은 일체 없는 경우 
const 리턴함수3 = ()=> 500 + 500;

const ret5 = 리턴함수3();
console.log(ret5);

const 리턴함수4 = (숫자1)=>{
    return 숫자1 * 숫자1
}

let ret4 = 리턴함수4(7);
console.log(ret4);

// fetch("localhost:3000")
// .then(res=>res.json())
// .then((result)=> console.log(result));

// js에서 json type 객체 만들기

let 객체1 = {}; //  blank 객체
객체1.이름 = "이몽룡"
객체1.전화번호 = "11111111"

// 초기값이 있는 객체 만들기
let 객체2 = {
    이름 : "홍길동",
    전화번호 : "12341234"
};

console.table(객체1);
console.table(객체2);

const 콘솔 = (m) => console.log(m);

콘솔(300 * 100);
