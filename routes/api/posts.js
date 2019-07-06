const express = require('express');
const router = express();

//@route   Get api/posts
//@desc    Test route
//@access  Public
router.get('/', (req, res) => res.send('post route'));

module.exports = router;
