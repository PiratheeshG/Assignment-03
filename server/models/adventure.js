let mongoose = require("mongoose")

// Create a model

let adventureModel = mongoose.Schema({
    country: String,
    city: String,
    touristAttractions: String,
    food: String,
    budget: Number, 
    notes: String
    },
    {
        collection: "adventures"
    }
);
module.exports=mongoose.model("Adventure", adventureModel)