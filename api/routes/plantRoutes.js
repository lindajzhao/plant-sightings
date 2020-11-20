'use strict'

const express = require('express')
const router = express.Router()
const { getTreflePlantById } = require('../services/plantsService')

// GET '/plant' single plant by ID
router.get('/:trefleId', async (req, res, next) => {
  const { trefleId } = req.params;

  try {
    const results = await getTreflePlantById(trefleId)
    
    res.json(results)
  }
  catch(e) {
    next(e)
  }
})

module.exports = router
