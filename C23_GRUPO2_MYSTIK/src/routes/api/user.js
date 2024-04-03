const express = require('express');
const router = express.Router();

const { allUsers,usersByID } = require('../../API/userControllers');

/* API routes */
router
.get('/api/users', allUsers)
.get('/api/users/:id', usersByID)
  

module.exports = router