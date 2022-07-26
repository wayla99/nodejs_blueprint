const db = require('../../repository/mongodb/crud');
const domain = require('../../domain/init');

function Delete(call, callback) {
    const { id } = call;
    db.Delete(id, domain.User)
        .then(() => {
            callback(null, {
                status: true
            });
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = Delete;
