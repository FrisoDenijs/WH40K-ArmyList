const express = require('express');
const router = express.Router();

const detachments_controller = require('../controllers/detachments.controller');

router.get('/test', (req, res) => {
    res.json({'msg': 'Test response'});
})

router.get('/test2', detachments_controller.test2);
router.get('/test3', detachments_controller.test3);

router.get('/', (req, res) => {
    try {
        const list = detachments_controller.detachments_list();

        res.statusCode = 200;
        res.json(list);
    }
    catch (err) {
        console.error(err);
        
        // res.statusCode = 400;
        // res.statusMessage = err;
    }
});

router.get('/:id', (req, res) => {
    try {
        const name = req.param('name');
        const detachment = detachments_controller.detachment(name);

        res.statusCode = 200;
        res.json(detachment);
    }
    catch (err) {
        console.error(err);
        
        // res.statusCode = 400;
        // res.statusMessage = err;
    }
});

module.exports = router;