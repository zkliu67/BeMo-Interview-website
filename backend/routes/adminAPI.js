const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/update', adminController.updatePageLayout); // check for requesting url

module.exports = router;