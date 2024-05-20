// add require model here:
const Apartment = require('../model/apartment');

module.exports = {
   index,
   show,
};

// function index(req, res) {
//  // this is a test
//   res.json({message: 'Getting apartments!'})
// };

function index(req, res) {
   const apartments = Apartment.getAll();
   res.json(apartments);
};

function show(req, res) {
   const apartment = Apartment.getOne(req.params.id);
   //res.json({message: 'this is the show route'});
   res.json(apartment || {message: 'data not found'}); //add || to avoid blank page
};