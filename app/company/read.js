const ctrl = require('../../service/company/interface');
require('express');

const Read = (req, res) => {
    const { id } = req.params;
    ctrl.Service.Read({ id }, (error, result) => {
        if (!error) {
            return res.status(200).json({
                code: '200',
                status: 'OK',
                data: result
            });
        } else {
            return res.status(204).json();
        }
    });
};

// function throwObjWithStacktrace() {
//     const someError = { statusCode: 204 }
//     Error.captureStackTrace(someError)
//     throw someError;
// }

module.exports = Read;