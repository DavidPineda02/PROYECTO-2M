const { Router } = require('express');
const { check } = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { isAdminRole } = require('../middlewares/validate.role.js');
const { calzadoExistsById } = require('../helpers/db.validators.js');
const { getCalzados, getCalzado } = require('../controllers/calzado.controllers.js');

const router = Router();

router.get("/all", getCalzados);
router.get("/one", 
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom( calzadoExistsById ),
        validateDocuments,
    ], getCalzado)
router.post("/add", 
    [
        check('modelo', )
    ], )