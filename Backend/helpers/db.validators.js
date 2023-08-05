const Calzado = require('../models/Calzado.js');
const Role = require ('../models/Role.js');
const Usuario = require('../models/Usuario.js');

const isValidRole = async(nombre= '')=>{
    const existeRol = await Role.findOne({nombre});
    if(!existeRol){
            throw new Error(`El rol ${nombre} no esta registrado en la base de datos`);
    }
}

const emailExiste = async( email = '' ) => {
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
}

const userExistsById = async( id ) => {
    const userExists = await Usuario.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}

const calzadoExistsById = async (id) =>{
    const calzadoExists = await Calzado.findById(id);
    if( !calzadoExists ){
        throw new Error(`El id (calzado) no existe ${id}`)
    }
}

module.exports = {
    isValidRole,
    emailExiste,
    userExistsById,
    calzadoExistsById
}