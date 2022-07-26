const ctrl = require('../../service/user/interface');

const Read = (req, res) => {
    const { id } = req.params;
    ctrl.Service.Read({ id }, (error, result) => {
        if (!error) {
            res.status(200).json({
                code: '200',
                status: 'OK',
                data: result
            });
        } else {
            res.status(204).json();
        }
    });
};

module.exports = Read;