const express = require('express');
const router = express.Router();
const { getFriends, addFriend, removeFriend } = require('../controllers/friendController');

// Define the routes for the friends functionality
router.route('/friends').get(getFriends);
router.route('/friends/add').post(addFriend);
router.route('/friends/remove').delete(removeFriend);

module.exports = router;