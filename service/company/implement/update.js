const db = require('../../../repository/mongodb/crud');
const domain = require('../../../domain/init');

function Update(call, callback) {
    const data = call;
    const { id } = data;
    db.Update(id, data, domain.Company)
        .then((result) => {
            if (!result) {
                return callback();
            }
            return callback(null, result);
            //return callback(null, data);
        })
        .catch((e) => {
            return callback(e);
        });
}


module.exports = Update;
