import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
  } from "../controllers/userController";

const userRouter = express.Router();

// userRouter.get(routes.users, (req, res) => res.send("Users"));
// userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
// userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
// userRouter.get(routes.changePassword, (req, res) =>
//   res.send("Change Password")
// );

// userRouter.get(routes.users, users);
// 왜 삭제 했지?

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);
// userDetail 제일 위에 있다가 밑으로 eidtProfile 보다 위에 있을 때 저걸 아이디로 인식해서 페이지 이동 문제 발생해서

export default userRouter;