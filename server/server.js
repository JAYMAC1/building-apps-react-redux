const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config({ path: './config.env' })

const PORT = process.env.PORT || 5000

// use middleware
app.use(cors())
app.use(express.json())

// connect to db
const con = require('./db/connection')

// using routes
app.use(require('./routes/routes'))

con
  .then((db) => {
    if (!db) {
      return process.exit(1)
    }

    // Listen to the http server
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`)
    })

    app.on('error', (err) =>
      console.log(`Failed to connect HTTP Server: ${err}`)
    )

    // Mongo DB Connection error
  })
  .catch((err) => {
    console.log(`Connection Failed: ${error}`)
  })
