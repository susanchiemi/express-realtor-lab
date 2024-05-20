// add require model here:
const House = require('../model/house');

module.exports = {
   index,
   show,
};

function index(req, res) {
   const houses = House.getAll();
   res.json(houses);
};

function show(req, res) {
   const house = House.getOne(req.params.id);
   //res.json({message: 'this is the show route'});
   res.json(house || {message: 'data not found'}); //add || to avoid blank page
};