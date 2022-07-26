const ctrl = require('../../service/interface');

const List = (req, res) => {
    ctrl.Service.List({}, (error, result) => {
        if (!error) {
            res.status(200).json({
                code: '200',
                status: 'Get data success',
                data: { lists: result }
            });
        } else {
            res.status(204).json();
        }
    });
};

module.exports = List;