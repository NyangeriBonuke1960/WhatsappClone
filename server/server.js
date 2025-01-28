const app = require('./app.js')
require('dotenv').config()
const PORT = process.env.PORT
require('./db.js')

app.listen(PORT, () => {
    console.log('App started');
})