const { Router } = require('express');
const { uploadFile } = require('../controllers/upload.controllers');

const router = Router();

router.post( '/', uploadFile );

module.exports = router;