// Part 2
// 1. Setup model module - dummy data
const apartments = [
   { id: 1,
     sqft: 700,
     price: 1450,
     isPetFriendly: false },
   { id: 2,
     sqft: 1200,
     price: 1650,
     isPetFriendly: true },
   { id: 3,
     sqft: 2500,
     price: 1850,
     isPetFriendly: false },
];
 
module.exports = {
   getAll: function() {
     return apartments;
   },

  getOne: function (id) {
    return apartments.find((apartment) => apartment.id === parseInt(id));
  }
};
 
// Setup the routes module