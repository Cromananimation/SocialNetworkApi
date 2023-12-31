const router = require('express').Router()
const { getUser, getUsers, createUser, deleteUser, updateUser } = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router