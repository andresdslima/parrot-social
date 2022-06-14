
const express = require('express');
const routes = require('./src/routes');
const handleError = require('./src/middlewares/handleMiddleware');
const db = require('./src/database');
const port = process.env.APP_PORT

const app = express()

app.use(express.json())

db.hasConection()

app.use(routes)

app.use(handleError)

app.listen(6000 || port, () => console.log('Servidor no ar!'))