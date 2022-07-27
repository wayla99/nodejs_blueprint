const mongoose = require('../repository/mongodb/init');
const config = require('../config/config')
const UUID = require('uuid-mongodb')

const companySchema = mongoose.Schema(
    {
        _id: { type: String, default: UUID.v4().toString('N') },
        name: { type: String, required: true }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }
)

const company = mongoose.model(config.MongoDBTableName, companySchema)

module.exports = company