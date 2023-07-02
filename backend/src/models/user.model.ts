import mongoose from "mongoose";
import UserInterface from "../interface/user.interface";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema<UserInterface>({
    fullName: {
        type: String,
        minLength: [5, 'minimum length for fullName must be 5']
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
   },
   roles:{
        type:String,
        enum:['student','instructor','admin'],
        default:'student',
   },
   resetPasswordToken:{
    type:String
   },
   jwt:{
    type:String
   },
   fcm:{
    type:String
   },
   resetPasswordExpire:{
    type:Date
   },
   enrolledCourse:{
    type:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }
    ]
   }
},{
    timestamps:true
}
)
userSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
userSchema.methods.matchPassword = async function(pass:any){
    return bcrypt.compare(pass,this.password);
}
const User = mongoose.model<UserInterface>('User',userSchema);
export default User