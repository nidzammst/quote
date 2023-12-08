const express = require('express')
const router = require('./src/routes')

const app = express()
app.use(router)

app.listen(8080, () => console.log("app listen on port 8080"))