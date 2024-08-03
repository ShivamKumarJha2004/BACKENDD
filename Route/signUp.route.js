import express from "express";
import {PostSignup,login} from "../Controller/signUp.controller.js";
const router=express.Router();

router.post("/signup",PostSignup);
router.post("/login",login)
export default router; 