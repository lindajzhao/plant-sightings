'use strict'

const Log = require('../models/logModel')

exports.getAllLogs = async () => {
  try {
    const logs = await Log.find()

    return logs
  } catch (e) {
    throw e
  }
}

// Create a new book that will be added to the database
exports.createBook = async (bookData) => {
  // 1. Create a book instance
  // const book = new Book(bookData)
  // try {
  //   // 2. Save book to database
  //   const doc = await book.save()
  //   // 3. return with created book
  //   return doc
  // } catch (e) {
  //   // 4. If error, throw and controller will catch
  //   throw e
  // }
}
