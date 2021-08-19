/**
 *  JS에서 배열을 만들기
 *      다른 type의 요소를 같은 배열에 저장할 수 있다
 * */
let 배열1 = [];
// 초기값이 있는 배열
let 배열2 = [1, 2, 3, 4, 5, 6, 7, 8];
let 배열3 = [1, 2, "우리나라", "대한민국"];
let 배열4 = Array(1, 2, 3, 4, 5, 6);
let 배열5 = Array();

배열1.push(10, 20);
배열1.push("대한민국");
배열1.push(1, 2, 3, 4, 5);
console.log(배열1);

배열3.push(100, 200, 300);
console.log(배열3);

// 배열.length 속성으로 통해서 배열의 크기를 알수있다
let 배열크기 = 배열3.length;

// 특정한 위치를 지정하여 배열요소를 저장
// 기존에 값이 있으면 삭제되고 새로운 값으로 대체
배열3[3] = "Republic of Korea";
console.log(배열3);

// 특정한 위치(index)에 저장된 값을 읽어서 다른 변수에 저장하기
let 요소1 = 배열3[3];
console.log(요소1);

// 배열의 맨 끝에 저장된 요소를 읽기
// 배열의 요소는 0 ~ (크기-1)
let 요소2 = 배열3[배열3.length - 1];

// 배열과 반복문
// 동기 방식으로 사용되는 일반적인 코드
for (let i = 0; i < 배열3.length; i++) {
  console.log(배열3[i]);
}

// 비동기 callback 방식으로 사용하기
배열3.forEach(function (요소) {
  console.log(요소);
});

// 화살표 함수를 사용한 forEach 반복문
배열3.forEach((요소) => {
  console.log(요소);
});

let 또다른배열 = 배열3.map((요소) => {
  console.log(요소);
  return 요소 + "A";
});

console.log(또다른배열);

let 숫자배열 = [2, 3, 4, 5, 6, 1, 2, 3, 5];

let 제곱한배열 = 숫자배열.map((숫자) => {
  return 숫자 * 숫자;
});

제곱한배열 = 숫자배열.map((숫자) => 숫자 * 숫자);

// map은 내부의 함수의 요소와 배열의 index값을 매개변수로
// 전달할 수 있고
// 내부 코드에서는 전달받은 요소와 index를 활용하여 코드를
// 작성할 수 있다
숫자배열.map((숫자, index) => {
  console.log(index, "번째 : ", 숫자);
});

console.log(제곱한배열);

// 배열의 요소, index,  자기자신의 복제 배열을
// 매개변수로 전달하여 다양한 코드에서 활용할 수 있다
제곱한배열.map((요소, index, 원래배열) => {
  console.log(원래배열, "의", index, "번째 요소", 요소);
});

// 원 배열에서 특정한 조건에 맞는 요소만 추출하여
// 다른 배열로 만들고 싶을때
// 내부 코드에서 특정 요소가 연산될때
// 마지막에 return이 true인 경우만 해당 요소를 다른 배열에
// push
let 짝수배열 = 숫자배열.filter((요소) => {
  return 요소 % 2 == 0;
});

console.log(짝수배열);

let 문자열배열 = ["aaa", "bbb", "ccc"];

let 새로운배열 = 문자열배열.filter((요소, index, 배열) => {
  return !!~요소.search(/[ab]+/);
});

console.log(새로운배열);
