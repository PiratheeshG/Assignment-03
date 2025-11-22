let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');
let Adventure = require('../models/adventure')

// get --> Extract & read something
// post --> post something
// put --> Edit/Update some data
// delete --> Delete the data

router.get('/',async(req,res,next)=>{
    try
    {
        const AdventureRecord = await Adventure.find();
        //console.log(AdventureRecord);
        res.render('adventure',{
            title:'Adventures',
            AdventureRecord:AdventureRecord
        })
    }
    catch(err)
    {
        console.error(err);
        //res.render
    }

})

module.exports = router;