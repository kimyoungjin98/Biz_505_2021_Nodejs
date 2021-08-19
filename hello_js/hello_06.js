let 배열1 = ["aaa", "bbb", "ccc"];

배열1.forEach((요소) => {
  console.log(요소.search(/[ab]+/));
});

/**
 * 문자열.search(찾는문자열)
 * 문자열 내에 찾는 문자열이 있으면
 * 위치값을 return(-1 보다 큰값)
 * 없으면 -1을 return
 */
let 새로운배열 = 배열1.filter((요소) => {
  return 요소.search(/[ab]+/) > -1;
});
새로운배열 = 배열1.filter((요소) => {
  return !!~요소.search(/[ab]+/);
});
console.log(새로운배열);

// 배열1의 요소에 한개라도
// 영문자 a 또는 b가 포함된 것이 있냐 ?
// some 함수는 filter와 성질이 비슷한데
// 최종 결과물이 배열이 아닌 boolean
let yesNo = 배열1.some((요소) => {
  return !!~요소.search(/[ab]+/);
});
if (yesNo) {
  console.log("배열1에는 영문자 a나 b가 있음");
} else {
  console.log("배열1에는 영문자 a나 b가 없음");
}
