import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const movie = "공조2";
  return res.status(200).json({
    status: 200,
    message: "영화 조회 성공",
    data: movie,
  });
});

module.exports = router;
