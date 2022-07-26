const db = require('../../../repository/mongodb/crud');
const domain = require('../../../domain/init');

function Create(call, callback) {
    const data = call;
    db.Create(data, domain.User)
        .then(() => {
            callback(null, data);
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = Create;