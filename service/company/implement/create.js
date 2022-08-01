const db = require('../../../repository/mongodb/crud');
const domain = require('../../../domain/init');

function Create(call, callback) {
    const data = call;
    db.Create(data, domain.Company)
        .then(() => {
            return callback(null, data);
        })
        .catch((e) => {
            return callback(e);
        });
}


module.exports = Create;