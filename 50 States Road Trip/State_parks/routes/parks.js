var express = require('express')
var Parks = require('../../50_-states/models').Parks

var router = express.Router()

router.get('/parks', function(req, res, next){
    Parks.findAll({order: ['name']})
        .then( parks => {
            return res.json(parks)
        })
        .catch( err => next.err() )
})

router.get('/parks/:name', function(req, res, next) {
    Parks.findOne({where: {name: req.params.name}})
        .then(parks => {
            if (parks) {
                return res.json(park)
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next.err() )
})

router.patch('/park/:name', function(req, res, next) {
    Parks.update({ visited: req.body.visited }, { where: {
            name: req.params.name
        }
    })
    .then( rows => {
        if (rows) {
            return res.send('ok')
        } else {
            return res.status(404).send()
        }
    })
    .catch( err => next.err() )
})

module.exports = router