const client = require("../../service/grpcClient/interface")

const All = (req, res) => {
    client.AllStaff(null, (err, data) => {
        try {
            res.status(200).json({
                code: '200',
                status: 'Get data success',
                data: { lists: data.staffList }
            });
        }
        catch (error) {
            res.status(204).json("");
        }
    })
}

module.exports = All