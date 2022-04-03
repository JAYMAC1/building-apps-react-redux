const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 5000

// use middleware
app.use(cors())
app.use(express.json())

// using routes
app.use(require('./routes/routes'))

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`)
})
