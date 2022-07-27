const db = require('../../../repository/mongodb/crud');
const domain = require('../../../domain/init');

function List(call, callback) {
    db.List(domain.Company)
        .then((result) => {
            if (!result) {
                return callback(null);
            }
            return callback(null, { data: result });
        })
        .catch((e) => {
            return callback(e);
        });
}


module.exports = List;