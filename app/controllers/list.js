const mongoose = require('mongoose');

const List = mongoose.model('List');

const getAll = (req, res) => {
    List.find()
        .exec()
        .then(list => res.json(list))
        .catch(err => res.status(500).json(err));
};

const getOne = (req, res) => {
    List.findOne({ id: req.params.id })
        .exec()
        .then(list => res.json(list))
        .catch(err => res.status(500).json(err));
};

const create = (req, res) => {
    List.create(req.body)
        .then(createList => res.json(createList))
        .catch(err => res.status(500).json(err));
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

module.exports = {
    getAll,
    create,
    update,
    remove
};