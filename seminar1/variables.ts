/**
 * String
 */
const test1: string = "hello";
console.log(typeof test1, test1);

/**
 * number
 */
const test2: number = 3;
console.log(typeof test2, test2);

/**
 * boolean
 */
const test3: boolean = true;
console.log(typeof test3, test3);

//const test4: string = 5; Error!

/**
 * array
 */
let aaa: number[] = [1, 2, 3]; // Good!
let bbb: Array<String> = ["가", "나", "다"];

/**
 * Object vs object : object가 좀 더 엄격한 타입
 */
const foo1 = (a: Object) => {
  console.log(a);
};

const foo2 = (b: object) => {
  console.log(b);
};

foo1("hello");
//foo2("hello"); // Error!

/**
 * function
 */
const hello2 = (name: string): void => {
  console.log(`${name}아 안녕`);
};

const sum2 = (a: number, b: number): number => {
  return a + b;
};

/**
 * 타입 단언 : as
 */
const test11: any = "이종현";
const nameLength = (test11 as string).length;
console.log(nameLength);

/**
 * 타입 단언 : angle-bracket
 */
const test12: any = "현세빈";
const nameLength2 = (<string>test12).length;
console.log(nameLength2);

/**
 * Interface
 */
interface SOPT {
  name: string;
  age: number;
  isSOPT: true;
  favoriteFood?: string;
}

const introduce: SOPT = {
  name: "dltjdn",
  age: 15,
  isSOPT: true,
  favoriteFood: "회",
};

const introduces: SOPT[] = [
  {
    name: "이서우",
    age: 15,
    isSOPT: true,
    favoriteFood: "회",
  },
  {
    name: "박현정",
    age: 15,
    isSOPT: true,
  },
  {
    name: "현세빈",
    age: 15,
    isSOPT: true,
  },
];
