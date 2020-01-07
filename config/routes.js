const list = require('../app/controllers/list');

module.exports = (app) => {
    app.get('/list', list.getAll);
    app.post('/list', list.create);
    app.put('/list/:id', list.update);
    app.delete('/list/:id', list.remove);
    app.delete('/list', list.clear);
};