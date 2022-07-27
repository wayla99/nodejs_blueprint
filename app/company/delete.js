const ctrl = require('../../service/company/interface');

const Delete = (req, res) => {
    const { id } = req.params;
    ctrl.Service.Delete({ id }, (error, result) => {
        if (!error && result != null) {
            return res.status(200).json({
                code: '200',
                status: 'Delete data success',
                data: {}
            });
        } else {
            return res.status(422).json({
                code: '422',
                status: 'ERROR',
                error: [{
                    "cause": "string",
                    "code": "string",
                    "subCode": "string"
                }]
            });
        }
    });
};

module.exports = Delete;