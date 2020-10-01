const mongoose = require('mongoose');
const GeoJSON = require('mongoose-geojson-schema');

const GeoSchema = new mongoose.Schema({

    geojson: mongoose.Schema.Types.FeatureCollection,
    name: {
        type: String,
        required: [true, 'Please add a name for the map layer']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// const GeoSchema = new mongoose.Schema({ featurecollection: mongoose.Schema.Types.FeatureCollection })

module.exports = mongoose.model('Geo', GeoSchema);
