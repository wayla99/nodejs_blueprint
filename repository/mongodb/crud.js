const Create = (data, domain) => new Promise((async (resolve, reject) => {
    try {
        const db = new domain(data);
        const newDB = await db.save();
        resolve(newDB);
    } catch (e) {
        reject(e);
    }
}));

const List = (domain) => new Promise((async (resolve, reject) => {
    try {
        const data = domain.find().sort({ _id: 'asc' }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

const Read = (key = '', domain) => new Promise((async (resolve, reject) => {
    try {
        const data = await domain.findOne({ _id: key }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

const Delete = (key = '', domain) => new Promise((async (resolve, reject) => {
    try {
        const data = await domain.findOneAndDelete({ _id: key });
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

const Update = (key = '', arg, domain) => new Promise((async (resolve, reject) => {
    try {
        const data = await domain.findOneAndUpdate({ _id: key }, arg, { new: true }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

module.exports = {
    Create,
    List,
    Read,
    Delete,
    Update
};