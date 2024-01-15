const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Smashorpass page")
})

module.exports = router