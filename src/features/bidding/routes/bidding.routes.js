const express = require('express')
const router = express.Router()

router.get('/:id', (req,res) => {
    const id = req.params.id
    res.send(`ini adalah bidding ${id}`)
})

module.exports = router