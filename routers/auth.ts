import { Router } from 'express';
import authController from '../controllers/auth';

const router = Router();

// // sign in
router.post('/signin', (req, res) => authController.signin(req, res));

// sign up
router.post('/checkemail', (req, res) => authController.checkEmail(req, res));
router.post('/signup', (req, res) => authController.signup(req, res));

// // find password
// router.post('/find-password', (req, res) => authController.signin(req, res));

// // send code to Email and check
router.post('/sendcode', (req, res) => authController.sendCode(req, res));
router.post('/checkcode', (req, res) => authController.checkCode(req, res));

export default router;
