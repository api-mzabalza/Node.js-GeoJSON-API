const express = require('express');
const multer = require("multer");
const router = express.Router();
const geo = require('../controllers/geo.cotroller');
// const upload = multer({
//     dest: "uploads/" // "uploads"
// });
const upload = multer({ storage: multer.memoryStorage() })


router.get('/', geo.getGeos);
router.get('/:name', geo.getGeoByName);


router.post('/', upload.single("file"), geo.addGeo);
router.delete('/', geo.deleteGeos);




// router.route('/').get(geo.getGeos).post(geo.addGeo);



module.exports = router;