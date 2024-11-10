import Servicio from '../servicio/propiedades.js'


class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerPropiedades = async (req,res) => {
        try {
            const { id } = req.params
            const propiedades = await this.servicio.obtenerPropiedades(id)
            res.json(propiedades)
        }
        catch (error){
            res.status(500).json({error: error.message})
        }
    }

    guardarPropiedad = async (req,res) => {
        try {
            const propiedad = req.body

            if(!Object.keys(propiedad).length) throw new Error('Propiedad vacía')

            const propiedadGuardada = await this.servicio.guardarPropiedad(propiedad)
            res.json(propiedadGuardada)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    actualizarPropiedad = async (req,res) => {
        const { id } = req.params
        const propiedad = req.body
        const propiedadActualizada = await this.servicio.actualizarPropiedad(id, propiedad)
        res.json(propiedadActualizada)
    }

    borrarPropiedad = async (req,res) => {
        const { id } = req.params
        const propiedadEliminada = await this.servicio.borrarPropiedad(id)
        res.json(propiedadEliminada)
    }
}

export default Controlador