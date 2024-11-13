import Servicio from '../servicio/clientes.js'
import ServicioPropiedades from '../servicio/propiedades.js'
import ServicioNotificaciones from '../servicio/notificaciones.js'

//Controlador
class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerClientes = async (req,res) => {
        try {
            const { id } = req.params
            const clientes = await this.servicio.obtenerClientes(id)
            res.json(clientes)
        }
        catch (error){
            res.status(500).json({error: error.message})
        }
    }

    guardarCliente = async (req,res) => {
        try {
            const cliente = req.body

            if(!Object.keys(cliente).length) throw new Error('Cliente vacío')

            const clienteGuardado = await this.servicio.guardarCliente(cliente)
            res.json(clienteGuardado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    enviarNotificacion = async (req,res) => {
        try {
            const {clienteID} = req.body
            const {propiedadID} = req.body

            if(!clienteID || !propiedadID) throw new Error('Cliente o Propiedad vacios')

            const cliente = await this.servicio.obtenerClientes(clienteID)
            const propiedad = await this.ServicioPropiedades.obtenerPropiedades(propiedadID)
            const mensaje = ""
            //const mensaje = `Usted reservo la propiedad ID ${propiedad.id} que se encuentra en el barrio de ${propiedad.barrio} en la calle ${propiedad.calle} ${propiedad.altura}.`
            this.ServicioNotificaciones.enviarNotificacion(mensaje,cliente.telefono)
            res.status(200).send('Notificacion enviada')
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}

export default Controlador