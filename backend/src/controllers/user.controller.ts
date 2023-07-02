import mongoose from "mongoose"
import {Request,Response} from "express"
import User from "../models/user.model";
import jwt from 'jsonwebtoken'


export const register = async (req:Request,res:Response) => {
try {
    const {email}= req.body;
    const currentUser = await User.findOne({email});
    if(currentUser){
        res.status(400).json({
            status:false,
            message:'already registered'
        })
    }
    else{
        const user = new User(req.body);
        await user.save();
        
        res.status(200).json({
            status:true,
            data:user,
            message:'created successfully'
        })
    }
} catch (error:any) {
    res.status(400).json({
        status:false,
        error:error.message
    })
}
}
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user: any = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: false, 
                message: 'Invalid user or password',
            })
        } else {
            const matchPass = await user.matchPassword(password);

            if (matchPass) {
                const secretKey: string = process.env.SECRET_KEY ?? '';
                const token = jwt.sign({ email: user.email }, secretKey, {
                    expiresIn: '3d'
                })
 
                const updatedUser: any = await User.findOneAndUpdate({
                    _id: user._id
                },
                    {
                        $set: {
                            jwt: token
                        }
                    },
                    {
                        new: true
                    })

                return res.status(200).json({
                    status: true,
                    message: 'User logged in successfully',
                    data: {
                        jwt: updatedUser.jwt,
                        role: updatedUser.roles
                    }
                })
            } else {
                return res.status(401).json({
                    status: false,
                    message: 'Invalid user or password',
                })
            }
        }


    } catch (error) {
        console.log(error)
    }
}