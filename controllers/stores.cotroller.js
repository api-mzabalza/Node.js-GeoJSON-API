const Store = require('../models/Store.model');

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {

    try {
        const stores = await Store.find();

        return res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        });
    } catch (err) {
        return res.status(500).json({
            error: 'Server error'
        })
    };
}

// @desc Create a store
// @route POST /api/v1/stores
// @access Public
exports.addStore = async (req, res, next) => {

    try {
        console.log(req.body);
        const store = await Store.create(req.body);
        return res.status(200).json({
            success: true,
            data: store
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    };
}