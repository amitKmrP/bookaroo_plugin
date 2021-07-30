import axios from 'axios';
import express from 'express';
import dotenv from "dotenv";
import BuckarooHmac from "../PaymentAuthentication/auth.js";
import paymentRequestData from "./paymentRequestData.js";
import RequestIp from '@supercharge/request-ip';

dotenv.config()
const createOreder = express.Router();

const requestUri = process.env.REQUEST_URI;
const apiBaseUri = process.env.API_BASE_ADDRESS;
const websiteKey = process.env.WEBSITE_KEY;
const secretKey = process.env.SECRETE_KEY;

const postContent = {
    paymentRequestData
};
const httpMethod = "POST";

const authHeader = BuckarooHmac.GetAuthHeader(requestUri, websiteKey, secretKey, postContent, httpMethod);

axios.defaults.baseURL = apiBaseUri;
axios.defaults.headers.common['Authorization'] = authHeader;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios({
    method: 'post',
    url:requestUri,
    data: postContent,
    timeout: 5000
}).then((response) => {
    console.log(response);
}).catch(error => {
    // console.log(error);
});

createOreder.get('/', (req, res) => {
    res.send("working");
});

export default createOreder;