const PlantController = require('../controllers/controller');

module.exports = function(app){
    app.get('/api/plants', PlantController.findAllPlants);
    app.post('/api/plants/new', PlantController.createPlant);
    app.get('/api/plants/:id', PlantController.findOnePlant);
    app.put('/api/plants/:id', PlantController.updatePlant);
    app.delete('/api/plants/:id', PlantController.deletePlant);
}