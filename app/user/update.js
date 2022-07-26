const ctrl = require('../../service/user/interface');

const Update = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = {
        id,
        name
    };

    ctrl.Service.Update(data, (error, result) => {
        if (!error) {
            res.status(200).json({
                code: '200',
                status: 'OK',
                data: {}
            });
        } else {
            res.status(422).json({
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