// Part 3
// 1. Setup model module - dummy data
const houses = [
   { id: 1,
    sqft: 900,
    numberOfBedrooms: 2,
    numberOfBaths: 2,
    price: 325000
    },
    { id: 2,
      sqft: 1200,
      numberOfBedrooms: 3,
      numberOfBaths: 1,
      price: 410000
      },
      { id: 3,
        sqft: 1600,
        numberOfBedrooms: 3,
        numberOfBaths: 2,
        price: 425000
        },
];
 
module.exports = {
  getAll: function() {
    return houses;
  },

 getOne: function (id) {
   return houses.find((house) => house.id === parseInt(id));
 }
};
