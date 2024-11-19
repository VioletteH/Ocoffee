// EXPRESS + EJS + DOTENV + STATIC + PORT

import express from "express"; 
import 'dotenv/config';

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.set("view engine", "ejs"); 
app.set("views", "views"); 
app.use(express.static("public")); 

import router from "./router/router.js";
app.use(router);

import notFoundMW from './middlewares/404.js';
app.use(notFoundMW);

app.listen(PORT, () => { 
    console.log(`Example app listening on port ${PORT}`); 
}); 