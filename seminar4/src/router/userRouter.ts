import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlewares";

const router: Router = Router();

//* 이름으로 유저 검색 - GET api/user?keyword={}
router.get("/search", userController.searchUserByUserName);

//* 유저 생성 - POST api/user
router.post(
  "/",
  [
    body("userName").notEmpty(),
    body("email").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.createUser
);

//* 아이디로 유저 조회
router.get("/:userId", auth, userController.getUserById);

//*  전체 유저 조회 - GET api/user
router.get("/", userController.getAllUser);

//* 유저 정보 업데이트 - PATCH api/user/:userId
router.patch("/:userId", userController.updateUser);

//* 유저 삭제 - DELETE api/user/:userId
router.delete("/:userId", userController.deleteUser);

//* 로그인 - POST api/user/signin
router.post(
  "/signin",
  [
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.signInUser
);

export default router;
