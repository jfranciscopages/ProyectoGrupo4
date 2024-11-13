import Servicio from '../servicio/clientes.js'

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
            //Habria que traer la propiedad? const propiedad = await Propiedad.ob
            //const mensaje = ""
            //this.servicio.enviarNotificacion(mensaje,telefonoDestino)
            res.status(200).send('Notificacion enviada')
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}

export default Controlador