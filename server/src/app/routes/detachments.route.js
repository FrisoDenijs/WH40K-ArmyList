const express = require('express');
const router = express.Router();

const detachments_controller = require('../controllers/detachments.controller');

router.get('/:version', (req, res) => {
    try {
        const version = req.params['version'];
        
        const list = detachments_controller.detachments_list(version);
        
        res.statusCode = 200;
        res.json(list);
    }
    catch (err) {
        res.statusCode = 400;
        res.send(err);
    }
});

router.get('/:version/:name', (req, res) => {
    try {
        const version = req.params['version'];
        const name = req.params['name'];
        const detachment = detachments_controller.detachment(version, name);

        res.statusCode = 200;
        res.json(detachment);
    }
    catch (err) {
        res.statusCode = 400;
        res.send(err);
    }
});

module.exports = router;