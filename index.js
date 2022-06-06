import express from "express";
import routes from "./src/ongoRoutes/ongoRoutes";
import mongoose, { mongo } from "mongoose";
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './src/swagger.json';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ongoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/' , (req, res) => {
    res.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT, () => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.log(`Your server is running on port ${PORT}`)
});