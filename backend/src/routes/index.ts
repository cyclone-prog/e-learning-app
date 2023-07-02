import express,{Request,Response} from "express";
import userRouter from "./user.route"
import passport from "../middlewares/passport.middleware";

import jwt from 'jsonwebtoken'

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
 
router.get('/login/failed',(req:Request,res:Response)=>{
    res.status(401).json({
        message:'unauthorized user'
    })
}) 

router.get('/auth/google/callback',passport.authenticate('google',{
    successRedirect: process.env.CLIENT_URL + '/dashboard',
    failureRedirect: '/login/failed'
}))


// router.get('/auth/google/callback', (req, res, next) => {
//     passport.authenticate('google', (err: any, user: any) => {
//         if (err) {
//             return next(err);
//         }
//         const secretKey: string = process.env.JWT_SECRET_KEY ?? '';
//         const token = jwt.sign(user["_json"].email, secretKey)
//         res.cookie('jwtToken', token);
//         res.redirect(`${process.env.CLIENT_URL}/dashboard`);
//     })(req, res, next);
// });
// router.use('/user',userRouter);

export default router
