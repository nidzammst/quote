const express = require("express");
const getQuote = require("./controller.js");

const router = express.Router();

router.get('/',(req,res) =>{
    res.json({
        status: 200,
        message: '﷽',
        info: 'To get quotes from this API please check "/quote"'
    })
})

router.get('/quote', getQuote)

module.exports = router