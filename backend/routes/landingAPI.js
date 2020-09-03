const express = require('express');
const landingController = require('../controllers/landingController');

const router = express.Router();

router.get('/page-layout', landingController.getPageLayout); // check for requesting url

module.exports = router;