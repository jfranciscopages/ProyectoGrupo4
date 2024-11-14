import Servicio from '../servicio/clientes.js'
import ServicioNotificaciones from '../servicio/notificaciones.js'

//Controlador
class Controlador {
    constructor() {
        this.servicio = new Servicio()
        this.servicioNotificaciones = new ServicioNotificaciones()
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
            this.servicioNotificaciones.enviarNotificacion(cliente)
            res.json(clienteGuardado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}

export default Controlador