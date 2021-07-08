const mongoose = require("mongoose");
const { Plant } = require('../models/models');

module.exports.createPlant = (req, res) => {
    Plant.create(req.body)
        .then(plant => res.json(plant))
        .catch(err => res.status(400).json(err));
}

module.exports.findAllPlants = (req, res) => {
    Plant.find().sort("position")
        .then(allPlant => res.json(allPlant))
        .catch(err => res.status(400).json(err));
}

module.exports.findOnePlant = (req, res) => {
    Plant.findOne({_id:req.params.id})
        .then(onePlant => res.json(onePlant))
        .catch(err => res.status(400).json(err));
}

module.exports.updatePlant = (req, res) => {
    Plant.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedPlant => res.json(updatedPlant))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)});
}

module.exports.deletePlant = (req, res) => {
    Plant.deleteOne({_id:req.params.id})
        .then(deletePlant => res.json(deletePlant))
        .catch(err => res.status(400).json(err));
}
