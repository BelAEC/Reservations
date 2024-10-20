const express = require('express');
const router = express.Router();
const path=require('path');
const model = require('../model/modelReservation'); // Adjust the path if needed
const modelReservation = require('../model/modelReservation');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'index.html'))
});

router.get('/post',(req,res)=>{
    res.render('index');
});

router.get('/getAll', async (req, res) => {
    try {
        const data = await modelReservation.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/post', async (req, res) => {
    const data = new model({
        court_no: req.body.court_no,
        type: req.body.type,
        date: req.body.date,
        time: req.body.time, // Use req.body instead of request.body
        status: req.body.status,
        player_name: req.body.player_name,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router; // Make sure to export the router
