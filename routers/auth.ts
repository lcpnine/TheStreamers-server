import { Router } from 'express';
import authController from '../controllers/auth';

const router = Router();

// // sign in
// router.post('/signin', (req, res) => authController.signin(req, res));

// // sign up
// router.post('/checkUsername', (req, res) =>
//   authController.checkUsername(req, res)
// );
router.post('/signup', (req, res) => authController.signup(req, res));

// // find password
// router.post('/findPassword', (req, res) => authController.signin(req, res));

// // send code to Email and check
// router.post('/sendCode', (req, res) => authController.sendCode(req, res));
// router.post('/checkCode', (req, res) => authController.checkCode(req, res));

export default router;
