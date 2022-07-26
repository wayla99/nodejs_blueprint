const db = require('../../../repository/mongodb/crud');
const domain = require('../../../domain/init');

function Read(call, callback) {
    const { id } = call;
    db.Read(id, domain.User)
        .then((result) => {
            if (!result) {
                callback('Couldd not find any todo with that id');
            }
            callback(null, result);
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = Read;
