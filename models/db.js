const mongoose = require('mongoose');
const databaseURI = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + process.env.DB_HOST;

var options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 10, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};

mongoose.connect(databaseURI, options);
