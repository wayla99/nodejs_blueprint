const db = require('../../../repository/mongodb/crud');
const domain = require('../../../domain/init');

function Delete(call, callback) {
    const { id } = call;
    db.Delete(id, domain.Company)
        .then((result) => {
            if (!result) {
                return callback();
            }
            return callback(null, result);
            // return callback(null, {
            //     status: true
            // });
        })
        .catch((e) => {
            return callback(e);
        });
}


module.exports = Delete;
