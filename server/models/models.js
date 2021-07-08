const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: [true, "Nickname is required. Naming your plants is good for them, and for you too!"],
        minlength: [2, "Name must be at least 2 chraracters!"]
    }
    ,
    name: {
        type: String
    }
    ,
    scientificName: {
        type: String
    }
    ,
    dateAdopted: {
        type: Date
    }
    ,
    light: {
        type: String
    }
    ,
    water: {
        type: String
    }
    ,
    info: {
        type: String
    }
    ,
    image: {
        type: String
    }
    ,
    picture: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });

module.exports.Plant = mongoose.model('Plant', PlantSchema);
