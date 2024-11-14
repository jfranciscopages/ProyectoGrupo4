import ModelFactory from "../model/DAOs/propiedadesFactory.js"

import config from '../config.js'
import { validar } from "./validaciones/propiedades.js"

class ServicioPropiedad {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }


    obtenerPropiedades = async id => {
        if (id) {
            const propiedad = await this.model.obtenerPropiedad(id)
            return propiedad
        }
        else {
            const propiedades = await this.model.obtenerPropiedades()
            return propiedades
        }
    }

    guardarPropiedad = async propiedad => {
        //validación específica del propiedad a guardar 
        const rta = validar(propiedad)
        if (rta.result) {
            const propiedadGuardada = await this.model.guardarPropiedad(propiedad)
            return propiedadGuardada
        }
        else {
            throw rta.error
        }
    }

    actualizarPropiedad = async (id, propiedad) => {
        const propiedadActualizada = await this.model.actualizarPropiedad(id, propiedad)
        return propiedadActualizada
    }

    borrarPropiedad = async id => {
        const propiedadEliminada = await this.model.borrarPropiedad(id)
        return propiedadEliminada
    }


}

export default ServicioPropiedad
