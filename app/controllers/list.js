const mongoose = require('mongoose');

const List = mongoose.model('List');

const getAll = (req, res) => {
    List.find()
        .exec()
        .then(list => res.json(list))
        .catch(err => res.status(500).json(err));
};

const create = async (req, res) => {
    let id = 0
    List.find()
        .exec()
        .then(list => {
            list.forEach(elem => {
                elem.id >= id ? id = elem.id + 1 : null
            })
            req.body.id = id
            List.create(req.body)
                .then(createList => res.json(createList))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => console.error(err));
};

const update = (req, res) => {
    List.updateOne({ id: req.params.id }, req.body)
        .exec()
        .then(list => res.json(list))
        .catch(err => res.status(500).json(err));
};

const remove = (req, res) => {
    List.deleteOne({id: req.params.id})
        .exec()
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json(err));
};

const clear = (req, res) => {
    List.remove()
        .exec()
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json(err));
}

module.exports = {
    getAll,
    create,
    update,
    remove,
    clear
};