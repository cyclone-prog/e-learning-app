import express,{Request,Response} from "express"
import { login, register } from "../controllers/user.controller";
const router = express.Router();

router.post('/login',login)
router.post('/register',register)
export default router