const express=require('express');
const mongoose=require('mongoose');
const path = require('path');
require ('dotenv').config();
const mongoString = "mongodb+srv://Admin:1234@cluster0.ig4ph.mongodb.net/";
const reservationRoutes = require('./routes/reservationRoutes');
const bodyParser = require('body-parser');


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error)=>{
    console.log('error');
    })
    database.once('connected', (req, res)=>{
        console.log('database connected')
    }
    )

   const app = express();
   app.use(express.json());
   app.use(bodyParser.json());
   app.use(express.urlencoded({ extended: true }));//optional
   app.set('view engine', 'ejs');
   
   app.set('views', './views');
   app.set('views', path.join(__dirname, 'views')); // Optional if views is named 'views'
   app.use(express.static('public'));
    app.use('/api', reservationRoutes);
    //app.use(express.static(path.join(__dirname, 'public'))); // For serving static files

//    app.use((req, res, next) => {
//         console.log(`Incoming request: ${req.method} ${req.url}`);
//         next(); // Call the next middleware
//     });
   
app.listen(3800, ()=>{
    console.log(`Server started at ${3800}`)
})

