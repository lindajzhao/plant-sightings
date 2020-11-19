
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = exports.schema = new Schema({
  trefleId: {
    type: String,
    required: true,
  },
  commonName: String,
  location: String,
  note: String,
  photos: [String]
})

module.exports = mongoose.model('Log', logSchema)
