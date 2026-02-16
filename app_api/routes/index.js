const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.route('/trips')
    .get(tripsController.tripsList) //GET Method routes tripsList
    .post(tripsController.tripsAddTrip); //POST Method routes Adds a Trip

// Get Method routes tripsFindByCode - requires parameter tripCode
// PUT Method routes Update Trip - requires parameter tripCode
router.route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); 

module.exports = router;
