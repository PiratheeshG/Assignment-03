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
            "country": req.body.country,
            "city": req.body.city,
            "touristAttractions": req.body.touristAttractions,
            "food": req.body.food,
            "budget": req.body.budget,
            "notes": req.body.notes,
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
        const id = req.params.id;
        const adventureToEdit = await Adventure.findById(id);
        res.render("Adventures/edit",
            {
                title:'Edit Adventure',
                Adventure: adventureToEdit
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})

// Post route for processing the Edit Page - Update Operation
router.post('/edit/:id',async(req,res,next)=>{   // ← changed GET to POST
    try
    {
        let id = req.params.id;
        let updateAdventure = {
            "country": req.body.country,
            "city": req.body.city,
            "touristAttractions": req.body.touristAttractions,
            "food": req.body.food,
            "budget": req.body.budget,
            "notes": req.body.notes
        }
        Adventure.findByIdAndUpdate(id,updateAdventure).then(()=>{
            res.redirect("/adventures")
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

// Get route for performing delete operation - Delete Operation
router.get('/delete/:id',async(req,res,next)=>{

})

module.exports = router;


