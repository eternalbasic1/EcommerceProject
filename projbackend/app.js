require('dotenv').config()

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require("cors");

//My Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//DB Connection
mongoose.set('strictQuery', false);//not very much useful as of now
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTED"); 
}).catch((err)=>console.log(err));




//MiddleWare
app.use(bodyParser.json());//it Parse incoming request(/ , /admin , /cart  ) bodies in a middleware before your handlers, available under the req.body property. In req.body property we have everything like req.body.name ,req.body.email , req.body.password etc..
app.use(cookieParser());// Handles the header and populate req.cookie. If we want to set something into the cookie or if we want to get something form the cookie we use cookie-parser.
app.use(cors());  // Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that blocks web pages from making requests to a different domain than the one that served the web page. This is done to prevent malicious websites from making requests to your web browser on behalf of the user.


// My Routes
app.use("/api", authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);



//PORT
const port = process.env.PORT||8000;

//Starting a Server
app.listen(port,() => {
    console.log(`App is up and running at ${port}`);
});   