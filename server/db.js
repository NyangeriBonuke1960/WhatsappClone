const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/whatsappclone')
.then(() => {
    console.log('Connected to mongodb')
})
.catch((error) => {
    console.log(`Mongodb error ${error}`)
})