const { Router } = require('express');
const { check } = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { calzadoExistsById, isValidRole } = require('../helpers/db.validators.js');
const { getCalzados, getCalzado, postCalzados, deleteCalzado, putCalzado } = require('../controllers/calzado.controllers.js');
const { isAdminRole } = require('../middlewares/validate.role.js');

const router = Router();

router.get("/all", getCalzados);

router.get("/one/:id", 
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom( calzadoExistsById ),
        validateDocuments,
    ], getCalzado);

router.post("/add", 
    [
        validateJWT,
        check('modelo', 'Modelo no es valido').not().isEmpty(),
        check('precio', 'Precio no valido').not().isEmpty(),
        check('color', 'Color no es valido').not().isEmpty(),
        check('talla', 'Talla no valido').not().isEmpty(),
        check('inventario', 'Inventario no valido').not().isEmpty(),
        check('imagenes', 'Imagenes no valido').not().isEmpty(),
        validateDocuments
    ], postCalzados);

router.delete("/del/:id", 
    [
        validateJWT,
        isAdminRole,
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom( calzadoExistsById ),
        validateDocuments
    ], deleteCalzado);

router.put("/upd/:id", 
    [
        validateJWT,
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom( calzadoExistsById ),
        validateDocuments
    ], putCalzado);

module.exports = router;