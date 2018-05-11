const Task = require('../models/tasks');

module.exports = {
    root: function(req, res) {
        res.render('index');
    },
    getAll: function(req, res) {
        Task.find({}, function(err, data) {
            if(err){
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },
    getOne: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, data) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(data);
            }
        })
    },
    create: function(req, res) {
        let newTask = new Task({
            title: req.body.title,
            description: req.body.description
        })
        newTask.save(function(err, success) {
            if(err) {
                res.json(err);
            }
            else {
                res.redirect('/tasks');
            }
        })
    }, 
    update: function(req, res) {
        let updatedInfo = {
            'title': req.body.title,
            'description': req.body.description,
            'completed': req.body.completed
        }
        Task.updateOne({_id: req.params.id}, updatedInfo, function(err, data){
            if(err)
            {
                console.log('u suc');
                res.json(err)
            }
            else{
                console.log('changed a thing');
                res.json(data);
            }
        })
    },
    delete: function(req, res) {
        Task.deleteOne({_id: req.body.params}, function(err, data){
            if(err){
                res.json(err);
            }
            else {
                res.json(data);
            }

        })
    }
}
