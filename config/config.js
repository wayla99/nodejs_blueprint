const config = {
    MongoDBEndpoint: "mongodb://touch:secret@localhost:27017/",
    MongoDBName: "nodejs_challenge?authSource=admin",
    MongoDBTableName: "user",

    BasePath: "/api/v1/",

    // gRPC config
    GRPCHost: "localhost:50052",
    GRPCClientHost: "localhost:50051",
};

module.exports = config;