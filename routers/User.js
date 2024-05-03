import express from "express";
import {
  addTask,
  getMyProfile,
  login,
  logout,
  register,
  removeTask,
  updateTask,
  verify,
} from "../controller/User.js";
import { isAuthenicated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/verify").post(isAuthenicated, verify);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/newTask").post(isAuthenicated, addTask);

router
  .route("/task/:taskId")
  .post(isAuthenicated, updateTask)
  .delete(isAuthenicated, removeTask);

router.route("/me").get(isAuthenicated, getMyProfile);

export default router;
