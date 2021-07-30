import express from 'express';
import axios from 'axios';
const paymentRoutes=express.Router();

paymentRoutes.get('/',(req,res)=>{
res.send(resData);
});
export default paymentRoutes;