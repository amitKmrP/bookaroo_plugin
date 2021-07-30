import express from 'express';
import bodyparser from 'body-parser';
import paymentRoutes from './src/routes/paymentRoutes.js';
import createOreder from './src/controller/createOreder.js';
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
// app.use(bodyparser.json());
app.listen(PORT, (err) => {
    if (err) {
        process.on('uncaughtException', (ex)=>{
            console.log(ex);
        })
        console.error('❌ Unable to connect the server: ', err);
    }else{
    console.log(`🌍 Server listening on port ${PORT}  environment`);
}
});

app.get('/', (req, res) => {

});
app.use('/paymentRoutes', paymentRoutes);
app.use('/createOreder', createOreder);