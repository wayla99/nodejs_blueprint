const path = require("path");
const PROTO_PATH = path.resolve(__dirname, './protobuf/staff/staff.proto');
const config = require('../../config/config');
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const Service = grpc.loadPackageDefinition(packageDefinition).staff
const client = new Service.Staff(
    config.GRPCClientHost,
    grpc.credentials.createInsecure()
)

module.exports = client