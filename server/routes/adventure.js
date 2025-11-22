let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');
let Adventure = require('../models/adventure')

// get --> Extract & read something
// post --> post something
// put --> Edit/Update some data
// delete --> Delete the data
// CRUD --> Create, Read, Update & Delete

// Get route for the read adventure records - Read Operation
router.get('/',async(req,res,next)=>{
    try
    {
        const AdventureRecord = await Adventure.find();
        //console.log(AdventureRecord);
        res.render('Adventures/list',{
            title:'Adventures',
            AdventureRecord:AdventureRecord
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Adventures/list',{
            error:'Error on server'
        })
    }

})

// Get route for displaying the Add Page - Create Operation
router.get('/add',async(req,res,next)=>{
    try
    {
        res.render('Adventures/add',{
            title:'Add Adventure'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Adventures/list',{
            error:'Error on server'
        })
    }

})
// Post route for processing the Add Page - Create Operation
router.post('/add',async(req,res,next)=>{
    try
    {
        let NewAdventure = Adventure({
            "Country":req.body.country,
            "Cities to Visit":req.body.city,
            "Tourist Attractions":req.body.touristAttractions,
            "Foods to Try":req.body.food,
            "Budget":req.body.budget,
            "Notes":req.body.notes,
        });
        Adventure.create(NewAdventure).then(()=>{
            res.redirect('/adventures')
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Adventures/list',{
            error:'Error on server'
        })
    }
})
// Get route for displaying the Edit Page - Update Operation
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        
    }
    catch(err)
    {
        console.error(err);
        res.render('Adventures/list',{
            error:'Error on server'
        })
    }
})
// Post route for processing the Edit Page - Update Operation
router.get('/edit/:id',async(req,res,next)=>{

})
// Get route for performing delete operation - Delete Operation
router.get('/delete/:id',async(req,res,next)=>{

})

module.exports = router;