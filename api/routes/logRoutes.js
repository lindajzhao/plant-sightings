'use strict'

const express = require('express')
const router = express.Router()
const logService = require('../services/logService')

router.post('/', async (req, res, next) => {
    console.log('req data', req.body)

    try {
      const newLogInDb = await logService.createLog(req.body)

      res.status(200).send({
        data: newLogInDb
      })
    } catch (e) {
      next(e)
    }
  })

module.exports = router
