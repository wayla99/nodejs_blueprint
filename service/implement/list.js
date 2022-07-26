const db = require('../../repository/mongodb/crud');
const domain = require('../../domain/init');

function List(call, callback) {
    db.List(domain.User)
        .then((result) => {
            if (!result) {
                callback(null, { data: [] });
            }
            callback(null, { data: result });
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = List;