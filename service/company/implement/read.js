const db = require('../../../repository/mongodb/crud');
const domain = require('../../../domain/init');

function Read(call, callback) {
    const { id } = call;
    db.Read(id, domain.Company)
        .then((result) => {
            if (!result) {
                return callback('Could not find any company with that id');
            }
            return callback(null, result);
        })
        .catch((e) => {
            return callback(e);
        });
}

module.exports = Read;