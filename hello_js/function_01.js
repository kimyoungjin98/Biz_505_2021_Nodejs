const 함수1 = function(){
    console.log("나는 함수 1 입니다");
}

함수3();
함수1();
함수2();

const 함수2 = function(){
    console.log("나는 함수 2 입니다");
}

// 호이스팅...
// 아래와 같은 방식으로 선언된 함수가 있으면
// JS는 실행을 할때 이 함수를 호출한 곳이 있는지 먼저 검사
// 만약 선언문보다 먼저 호출한 곳이 있으면
// 내부적으로 코드의 위치를 변경하는 시도를 한다
function 함수3(){
    console.log("나는 함수 3 입니다")
}