const Geo = require('../models/Geo.model');

const path = require("path");
const fs = require("fs");

// @desc Get all geojsons
// @route GET /api/v1/geo
// @access Public
exports.getGeos = async (req, res, next) => {

    try {
        const geo = await Geo.find();
        return res.status(200).json({
            success: true,
            count: geo.length,
            data: geo
        });
    } catch (err) {
        return res.status(500).json({
            error: 'Server error'
        })
    };
}

// @desc Create a geojson
// @route POST /api/v1/geo
// @access Public
exports.addGeo = async (req, res, next) => {

    if (!req.file) {
        res.status(400).send({
            status: false,
            message: 'No file uploaded'
        })
    }

    if (!req.body.name) {
        res.status(400).send({
            status: false,
            message: 'Missing name: <layerName> in body request.'
        })
    }

    const {name} = req.body;
    const jsonString = req.file.buffer;
    const jsonObject = JSON.parse(jsonString);

    try {
        const geo = await Geo.create({
            geojson: jsonObject,
            name
        });
        return res.status(200).json({
            success: true,
            // file: req.file
        })

    } catch (error) {
        return res.status(500).json({
            error
        })
    };
}

// @desc Delete all
// @route DELETE /api/v1/geo
// @access Public
exports.deleteGeos = async (req, res, next) => {

    try {
        const geo = await Geo.remove({});
        return res.status(200).json({
            success: true,
        })

    } catch (error) {
        return res.status(500).json({
            error
        })
    };
};

// @desc Get Geojson by name
// @route GET /api/v1/geo/:name
// @access Public
exports.getGeoByName = async (req, res, next) => {

    const { name } = req.params;
    try {
        const geo = await Geo.findOne({name});
        return res.status(200).json(geo || {});

    } catch (error) {
        return res.status(500).json({
            error
        })
    };
};