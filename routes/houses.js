// 1
const express = require('express');
const router = express.Router();
//add the required controller file
const housesCtrl = require('../controllers/houses');

router.get('/', housesCtrl.index);
// add new route here
// this is a paramater
router.get('/:id', housesCtrl.show);

// 2
module.exports = router;