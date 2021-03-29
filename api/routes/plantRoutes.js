const express = require('express')
const router = express.Router()
const { getTreflePlant } = require('../services/plantsService')

// GET '/plant/slug' single plant by slug
router.get('/slug/:slug', async (req, res, next) => {
  try {
    const results = await getTreflePlant({ slug: req.params.slug })

    res.json(results)
  }
  catch(e) {
    next(e)
  }
})

module.exports = router
