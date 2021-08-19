// 전개연산자(spread , ...)
// 배열과 객체의 값을 원본은 유지하면서
// 새로운 복제본을 만들때
// 일부를 추가, 변경(update)하고자 할 때
// 코드를 간소하게 사용할 수 있도록 하는 연산자

let 배열 = [1, 2, 3];

let 새배열 = 배열;
새배열.push(10);
console.table(새배열);

let 새배열2 = [...배열, 20];
console.table(새배열2);

let 새배열3 = [...배열, 30];
console.table(새배열3);

let 나라들 = ["KOREA", "USA", "CHINA", "JAPAN", "ENGLAND"];
let [한국, 미국, 중국, 일본, 영국] = 나라들;
console.log(한국, 미국, 중국, 일본, 영국);
