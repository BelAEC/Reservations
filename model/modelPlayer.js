const mongoose = require('mongoose');
const playerShema = new mongoose.Shema({

    name:{
        type:String,
        required:true,
    }
    ,
    email:{
        type:String, 
    },

    reservationList:{
        type:Array,
    }
})
module.exports = mongoose.model('Player', playerShema);