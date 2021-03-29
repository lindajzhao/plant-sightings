const express = require('express')
const router = express.Router()
const { getTreflePlant } = require('../services/plantsService')

// GET '/plant' single plant by ID
router.get('/', async (req, res, next) => {
  try {
    const results = await getTreflePlant(req.body)

    res.json(results)
  }
  catch(e) {
    next(e)
  }
})

module.exports = router
