const mongoose = require('mongoose');
const config = require('../../config/config');

mongoose.connect(config.MongoDBEndpoint + config.MongoDBName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log(err);
})

module.exports = mongoose