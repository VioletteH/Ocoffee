import express from "express"; 
import 'dotenv/config';
import sessionMW from 'express-session'; 
import router from "./router/router.js";
import notFoundMW from './middlewares/404.js';

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.set("view engine", "ejs"); 
app.set("views", "views"); 
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));

app.use(sessionMW({
    secret: 'une vrai phrase secrète utilisée seulement pour cette application !!',
    resave: true, 
    saveUninitialized: true,
    cookie: { secure: false } 
  }));

app.use(router);
app.use(notFoundMW);

app.listen(PORT, () => { 
    console.log(`Example app listening on port ${PORT}`); 
}); 