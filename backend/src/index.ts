import express,{Request,Response} from "express";
import "dotenv/config";
import { dbConnection } from "./config/db.config";

const app = express();
dbConnection();
app.listen(process.env.PORT,()=>{
    console.log(`app is running at port ${process.env.PORT}`)
})