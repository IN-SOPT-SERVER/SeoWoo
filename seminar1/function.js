/**
 * 함수 선언식
 */
function hello(name) {
  console.log(`안녕 ${name}`);
}
hello("이서우");

/**
 * 함수 표현식
 */
const sum = (num1, num2) => {
  const result = num1 + num2;
  console.log(result);
};
sum(1, 2);

/**
 * typeof
 */
const test = "hello";
console.log(typeof test);
