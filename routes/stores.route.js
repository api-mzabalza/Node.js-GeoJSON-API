const express = require('express');
const router = express.Router();
const store = require('../controllers/stores.cotroller');


// router.get('/', store.getStores);

router.route('/').get(store.getStores).post(store.addStore);

module.exports = router;