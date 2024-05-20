// 1
const express = require('express');
const router = express.Router();
//add the required controller file
const apartmentsCtrl = require('../controllers/apartments');

router.get('/', apartmentsCtrl.index);
// add new route here
// this is a paramater
router.get('/:id', apartmentsCtrl.show);

// 2
module.exports = router;


// Setup controller module