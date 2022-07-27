const ctrl = require('../../service/company/interface');

const Update = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = {
        id,
        name
    };

    ctrl.Service.Update(data, (error, result) => {
        if (!error && result != null) {
            return res.status(200).json({
                code: '200',
                status: 'OK',
                data: { result }
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

module.exports = Update;