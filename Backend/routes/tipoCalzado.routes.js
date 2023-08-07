const { Router } = require('express');
const { check } = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { tipoCalzadoExistsById } = require('../helpers/db.validators.js');
const { isAdminRole } = require('../middlewares/validate.role.js');
const { getTipoCalzado, getTipoCalzados, postTipoCalzado, deleteTipoCalzado, putTipoCalzado } = require('../controllers/tipoCalzado.controllers.js');

const router = Router();

router.get("/all", getTipoCalzados);

router.get("/one/:id", 
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom( tipoCalzadoExistsById ),
        validateDocuments
    ], getTipoCalzado);

router.post("/add", 
    [
        validateJWT,
        check('nombre', 'Nombre no es valido').not().isEmpty(),
        check('descripcion'),
        check('estilo', 'Estilo no es valido').not().isEmpty(),
        check('genero', 'Genero no valido').not().isEmpty(),
        check('material', 'Material no valido').not().isEmpty(),
        check('color', 'Color no valido').not().isEmpty(),
        check('tallas_disponibles', 'Tallas Disponibles no valido').not().isEmpty(),
        validateDocuments
    ], postTipoCalzado);

router.delete("/del/:id", 
    [
        validateJWT,
        isAdminRole,
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom( tipoCalzadoExistsById ),
        validateDocuments
    ], deleteTipoCalzado);

router.put("/upd/:id", 
    [
        validateJWT,
        isAdminRole,
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom( tipoCalzadoExistsById ),
        validateDocuments
    ], putTipoCalzado);

module.exports = router;