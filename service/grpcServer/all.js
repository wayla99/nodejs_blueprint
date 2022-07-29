const grpc = require("grpc");
const domain = require('../../domain/init');

function All(_, callback) {
    domain.Company.find(async (err, res) => {
        const count = await domain.Company.count();
        if (err) {
            return callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            });
        } else {
            return callback(null, { total: count, companyList: res, error: err })
        }
    })

}

module.exports = All;