const express = require('express');
const router = express.Router();
const { getResponses, createResponse, updateResponse, deleteResponse } = require('../controllers/responseController');

// Define the routes for the response functionality
router.route('/responses').get(getResponses);
router.route('/responses').post(createResponse);
router.route('/responses/:responseId').put(updateResponse);
router.route('/responses/:responseId').delete(deleteResponse);

module.exports = router;