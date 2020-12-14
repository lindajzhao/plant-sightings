'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logSchema = exports.schema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  trefleId: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
  },
  commonName: String,
  scientificName: String,
  family: String,
  genus: String,
  location: String,
  note: String,
  photos: String,
})

module.exports = mongoose.model('Log', logSchema)
