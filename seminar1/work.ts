// 파트원을 소개해주는 코드 만들기 실습
/**
 * ~~는 ~살이고 ~에 살고있고 ~를 좋아합니다
 */

interface MEMBER {
  name: string;
  age: number;
  address: string;
  favorite: string;
  mbti?: string;
}

const members: MEMBER[] = [
  {
    name: "조하얀",
    age: 24,
    address: "용산구",
    favorite: "초밥",
    mbti: "intp",
  },
  {
    name: "이서우",
    age: 24,
    address: "영등포구",
    favorite: "버블티",
    mbti: "ESFJ",
  },
  {
    name: "박현정",
    age: 24,
    address: "부천",
    favorite: "회",
    mbti: "esfj",
  },
];

members.map((member) =>
  console.log(
    `${member.name}은 ${member.age}살이고 ${member.address}에 살고있고 ${member.favorite}을 좋아합니다`
  )
);
