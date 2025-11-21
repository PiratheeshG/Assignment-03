let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

// CRUD --> Read

let Destination = require('../model/destinations');

// get --> extract and read smth
// post --> post smth
// put --> edit/update some data
// delete --> delete the data
// crud --> create, read, update, delete

// read the data from the db
router.get('/', async(req, res, next) => {
    try
    {
        const DestinationList = await Destination.find();
        res.render('Destinations/list', {
            title: 'Destinations',
            DestinationList: DestinationList
        })

    }
    catch(err)
    {
        console.error(err);
        res.render('Destinations/list', {
            error: 'error on server'
        })
    }
})

// get route for add page -- create op
router.get('/add', async(req, res, next) => {
    try{
        res.render('Destinations/add', {
            title: 'Add a Destination'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Destinations/add', {
            error: 'error on server'
        })
    }
})

// post route for processing add page -- create op
router.post('/add', async(req, res, next) => {
    try
    {
        let newDestination = Destination({
            "countryName": req.body.countryName,
            "cities": req.body.cities,
            "attractions": req.body.attractions,
            "foods": req.body.foods,
            "budget": req.body.budget,
            "notes": req.body.notes
        });

        Destination.create(newDestination).then(() => {
            res.redirect('/destinations')
        })
    } 
    catch(err)
    {
        console.error(err);
        res.render('Destinations/add', {
            error: 'error on server'
        })
    }   
})

// get route for edit page -- update op
router.get('/edit/:id', async(req, res, next) => {
    try
    {
        const id = req.params.id;
        const destinationToEdit = await Destination.findById(id);
        res.render("Destinations/edit",
            {
                title: 'Edit Destination', 
                Destination: destinationToEdit
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})

// post route for processing edit page -- update op
router.post('/edit/:id', async(req, res, next) => {
    try{
        let id = req.params.id;
        let updatedDestination = Destination({
            "_id": id,
            "countryName": req.body.countryName,
            "cities": req.body.cities,
            "attractions": req.body.attractions,
            "foods": req.body.foods,
            "budget": req.body.budget,
            "notes": req.body.notes
        })

        Destination.findByIdAndUpdate(id, updatedDestination).then(() => {
            res.redirect("/destinations")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})

// get route for deleting items -- delete op
router.get('/delete/:id', async(req, res, next) => {
    try{
        let id = req.params.id;
        Destination.deleteOne({ _id: id }).then(() => {
            res.redirect("/destinations")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})

module.exports = router;

