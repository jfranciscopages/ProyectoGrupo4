import ModelFactory from "../model/DAOs/clientesFactory.js"

import config from '../config.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }
 
    obtenerClientes = async id => {
        if (id) {
            const cliente = await this.model.obtenerClientes(id)
            return cliente
        }
        else {
            const clientes = await this.model.obtenerClientes()
            return clientes
        }
    }

    guardarCliente = async cliente => {
        //validación específica del cliente a guardar 
        const rta = validar(cliente)
        if (rta.result) {
            const clienteGuardado = await this.model.guardarCliente(cliente)
            return clienteGuardado
        }
        else {
            throw rta.error
        }
    }

}

export default Servicio