// hello.js
console.log("대한민국");
console.log(30+40);
console.log("대한민국", "우리나라", "Republic of Korea");
console.log("30 + 40 = ", 30+40);

// 전통적인 js에서 변수를 선언하는 방법
// 전역적인(pulibc) 변수를 선언하고자 할때
var 변수1 = 100;

// 지금 권장하는 변수 선언하는 방법
// 모듈, 함수 scope 단위로 설정되는 변수
// scope에 따라서 접근이 구별된다
let 변수2 = 200;

// 한번 값이 저장되면 값을 변경할 수 없다
// java final과 같다 
// primitive(int, float, string)이 아닌
// 객체타입의 변수를 만들때는 가급적 const를 사용하라
// 함수를 선언할때도 사용
const 상수1 = 300;

let 숫자1 = 100;
let 숫자2 = 200;
let 합계 = 숫자1 + 숫자2;
console.log(숫자1, 숫자2, 합계);

const 함수 = function(){
    let 숫자1 = 100;
    let 숫자2 = 200;
    let 합계 = 숫자1 + 숫자2
    console.log(숫자1, 숫자2, 합계)
}

함수();

const 함수1 = function(){
    console.log("대한민국");
}

function func2(){
    console.log("우리나라");
}