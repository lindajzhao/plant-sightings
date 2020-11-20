'use strict'

const express = require('express')
const router = express.Router()
const { getTreflePlantsByQuery } = require('../services/plantsService')

// GET '/plants'
router.get('/', async (req, res, next) => {
  const { q: query } = req.query

  try {
    const results = await getTreflePlantsByQuery(query)

    res.json(results)
  }
  catch(e) {
    next(e)
  }
})

module.exports = router
