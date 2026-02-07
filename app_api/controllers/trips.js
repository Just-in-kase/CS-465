const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('Trip');

// GET: /trips - list all trips
const tripsList = async (req, res) => {
    const q = await Model.find().exec();

    if (!q) {
        return res.status(404).json(err);}

        else {
            return res.status(200).json(q);
        }
};

//Get: /trips/:tripCode - get one trip by code
const tripsFindByCode = async (req, res) => {
    const q = await Model.find({'code' : req.params.tripCode }) // Return single record
    .exec();

    // Uncomment the following line to show results of query 
    // in console
    // console.log(q);

    if (!q) {
        return res.status(404).json(err);}

        else {
            return res.status(200).json(q);
        }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
