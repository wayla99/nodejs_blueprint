const config = {
    MongoDBEndpoint: "mongodb://touch:secret@localhost:27017/",
    MongoDBName: "nodejs_challenge?authSource=admin",
    MongoDBTableName: "user",

    BasePath: "/api/v1/"
};

module.exports = config;