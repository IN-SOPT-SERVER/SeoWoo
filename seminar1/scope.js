/**
 * var : Function Scope
 */
if (true) {
  var test = "var!";
  console.log(test);
}
console.log(test);

function fun() {
  var test3 = "test3";
  if (true) {
    console.log(test3);
  }
  console.log(test3);
}
//console.log(test3); // Error!

/**
 * let,const : Block Scope
 */
if (true) {
  let test2 = "var!";
  console.log(test2);
}
//console.log(test2); // Error!

/**
 * Array
 */
const arr1 = ["dltjdn", "햄버거", 20, true];
const arr2 = Array("dltjdn", "햄버거", 20, true);

arr1.map((item) => console.log(`${item}이다`));
