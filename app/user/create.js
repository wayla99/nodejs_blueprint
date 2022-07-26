const ctrl = require('../../service/user/interface');
const UUID = require('uuid-mongodb')

const Create = (req, res) => {
    const { body } = req;
    const newData = {
        _id: UUID.v4().toString('N'),
        name: body.name,
    };
    ctrl.Service.Create(newData, (error, data) => {
        if (!error) {
            res.status(201).json({
                code: '201',
                status: 'Create data success',
                data: data
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

module.exports = Create;