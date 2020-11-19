'use strict'

const express = require('express')
const router = express.Router()
const logService = require('../services/logService')

// GET /logs
router.get('/', async (req, res, next) => {
  try {
    const logs = await logService.getAllLogs()

    res.status(200).send({
      data: logs
    })
  } catch (e) {
    // error thrown in service
    next(e)
  }
})

module.exports = router
