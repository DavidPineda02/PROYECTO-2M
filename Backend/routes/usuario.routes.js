const { Router } = require('express');
const { check } = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { isAdminRole } = require('../middlewares/validate.role.js');
const { isValidRole, emailExiste, userExistsById } = require('../helpers/db.validators.js');
const { getUsers, postUsers, deleteUsers, putUsers, patchUsers, getUser} = require('../controllers/usuario.controllers.js');

const router = Router();

router.get("/all", getUsers);
router.get("/one/:id", 
        [
                check('id', 'No es un id válido').isMongoId(),
                check('id').custom( userExistsById ),
                validateDocuments,
        ], getUser);
router.post("/add",
        [
                check('nombre', 'Nombre no es valido').not().isEmpty(),
                check('password', 'Password debe ser de minimo 6 letras').isLength({min :6}).trim(),
                check('email', 'El email no es valido').isEmail().trim().normalizeEmail().notEmpty(),
                check('email').custom(emailExiste),
                check('rol').custom(isValidRole),
                validateDocuments
        ] ,postUsers);

        router.delete("/del/:id", 
        [
                validateJWT,
                isAdminRole,   
                check('id', 'No es un ID válido').isMongoId(),
                check('id').custom( userExistsById ),
                validateDocuments
        ], deleteUsers );

        router.put("/upd/:id",
        [
                validateJWT,
                isAdminRole,
                check('id', 'No es un ObjectID MongoDB válido').isMongoId(),
                check('id').custom( userExistsById ),
                check('rol').custom(isValidRole),
                validateDocuments
        ], putUsers );
router.patch("/upd/:id", patchUsers);

module.exports = router;