const MongoClient = require('mongodb').MongoClient;
const uri = require('../utils/constants').MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {

    if (err) {
        throw new Error(err)
    } else {
        console.log("Connected")
    }
})


module.exports = client;
