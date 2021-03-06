'use strict'

const express = require('express')
const router = express.Router()
const logService = require('../services/logService')

// I haven't added any logic for associating logs to a specific user yet

// POST '/log'
router.post('/', async (req, res, next) => {
  try {
    const newLogInDb = await logService.createLog(req.body)

    res.json({
      data: newLogInDb
    })
  } catch (e) {
    next(e)
  }
})

// DELETE '/log/:logId'
router.delete('/:logId', async (req, res, next) => {
  const { logId } = req.params

  try {
    const deletedConfirmation = await logService.deleteLog(logId)

    res.json({
      logId,
      deletedConfirmation
    })
  } catch (e) {
    next(e)
  }
})

// Update '/log/:logId'
router.patch('/:logId', async (req, res, next) => {
  const { logId } = req.params
  const { fields } = req.body

  try {
    const updatedLog = await logService.updateExistingLog(logId, fields)
    
    res.json(updatedLog)
  } catch (e) {
    next(e)
  }
})

module.exports = router
