const express = require("express");
const getQuote = require("./controller.js");

const router = express.Router();

router.get('/',(req,res) =>{
    res.json({
        status: 200,
        message: '﷽',
        info: 'To get quotes from this API please check https://quote-km1t.onrender.com/quote'
    })
})

router.get('/quote', getQuote)

module.exports = router