const ctrl = require('../../service/company/interface');

const List = (req, res) => {
    ctrl.Service.List({}, (error, result) => {
        if (!error && result != null) {

            return res.status(200).json({
                code: '200',
                status: 'Get data success',
                data: { lists: result }
            });
        } else {
            return res.status(204).json();
        }
    });
};

module.exports = List;