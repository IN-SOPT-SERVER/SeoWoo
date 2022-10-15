import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

interface Member {
  name: string;
  age: number;
  address: string;
  favorite: string;
  mbti: string;
}

const members: Member[] = [
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
    name: "김예린",
    age: 25,
    address: "강남구청",
    favorite: "고기",
    mbti: "istj",
  },
];

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "멤버 조회 성공",
    data: members,
  });
});

module.exports = router;
