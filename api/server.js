'use strict'

const mongoose = require('mongoose')
const express = require('express')

// 1. Create main express intance
const app = express()

// 2. Require routes
const logRoutes = require('./routes/logRoutes')
const logsRoutes = require('./routes/logsRoutes')
const plantsRoutes = require('./routes/plantsRoutes')
const plantRoutes = require('./routes/plantRoutes')

// 3. Require conatants
const { URL, PORT } = require('./utils/constants')

// 4. Ensure that the router is parsing the request body to appropriately format incoming requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 5. Utilise routes
app.use('/api/log', logRoutes)
app.use('/api/logs', logsRoutes)
app.use('/api/plants', plantsRoutes)
app.use('/api/plant', plantRoutes)

// 6. Define configuration for mongodb
const MONGO_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// 7. Start server
mongoose
  .connect(URL, MONGO_CONFIG)
  .then(async () => {
    console.log(`Connected to MongoDB at ${URL}`)

    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
