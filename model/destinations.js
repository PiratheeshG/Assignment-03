let mongoose = require("mongoose");

// create a model 

let destinationModel = mongoose.Schema(
    {
        countryName: String,
        cities: String,
        attractions: String,
        foods: String,
        budget: Number,
        notes: String
    },
    {
        collaction: "destinations"
    }
);

module.exports = mongoose.model('Destination', destinationModel);
