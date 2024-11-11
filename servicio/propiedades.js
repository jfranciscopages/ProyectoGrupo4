import ModelFactory from "../model/DAOs/propiedadesFactory.js"

import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    

    obtenerPropiedades = async () => {

    }

    guardarPropiedad = async () => {
        
    }

    guardarPropiedad = async () => {
        
    }

}

export default Servicio