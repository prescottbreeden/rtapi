const controller = require('../controllers/controllers');

module.exports = function(app) {
    
        app.get('/', function(req, res) {
            controller.root(req, res);
        })
    
        app.get('/tasks', function(req, res) {
            controller.getAll(req, res);
        })
    
        app.get('/tasks/:id', function(req, res){
            controller.getOne(req, res);
        })

        app.post('/tasks', function(req, res) {
            controller.create(req, res);
        })

        app.put('/tasks/:id', function(req, res) {
            controller.update(req, res);
        })

        app.delete('/tasks/:id', function(req, res) {
            controller.delete(req, res);
        })
}