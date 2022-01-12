const mongoose = require('mongoose').set('debug', process.env.ENV !== 'production')

mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
})
    

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connected to Mongo db')
})
db.on('close', function(str) {
    console.log("DB disconnected: "+str)
})
