const db = require('../../repository/mongodb/crud');
const domain = require('../../domain/init');

function Update(call, callback) {
    const data = call;
    const { id } = data;
    db.Update(id, data, domain.User)
        .then(() => {
            callback(null, {
                status: true
            });
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = Update;
