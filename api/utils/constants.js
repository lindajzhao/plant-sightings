'use strict'

exports.URL = process.env.DB_URI || 'mongodb://localhost:27017/plant-sightings'
exports.PORT = process.env.PORT || 8080
exports.SECRET = process.env.SECRET || 'super-secret-passphrase'
exports.TREFLE_TOKEN = process.env.TREFLE_TOKEN || 'a2VENXZQQzlDWDJrU3ZyeVBsMWt6UT09'