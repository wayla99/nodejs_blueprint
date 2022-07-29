const path = require("path");
const PROTO_PATH = path.resolve(__dirname, 'protobuf/company/company.proto');
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
//const domain = require('../../domain/init');
const service = require("./all");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const companyProto = grpc.loadPackageDefinition(packageDefinition).company;
const server = new grpc.Server();

server.addService(companyProto.Company.service, {
    AllCompany: service,
});

server.bind("localhost:50052", grpc.ServerCredentials.createInsecure())
console.log("0.0.0.0:50052")

module.exports = server;
