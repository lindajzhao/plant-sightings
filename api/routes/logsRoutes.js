
'use strict'

const express = require('express')
const router = express.Router()

// GET /logs
router.get('/', async (req, res, next) => {
  // try {
  //   // 1. Fetch all books from database
  //   const books = await bookService.listBooks()
  //   // 2. Respond with list of books
  //   res.status(200).send({
  //     data: books
  //   })
  // } catch (e) {
  //   // 3. If error, send to the error handler
  //   next(e)
  // }
  console.log(req, res)
  res.json({ message: 'ok'})
})

module.exports = router
