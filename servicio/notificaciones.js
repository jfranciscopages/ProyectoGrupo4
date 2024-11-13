import config from '../config.js'

/* Your AccountSID and Auth Token from console.twilio.com */
class Notificaciones {
    constructor() {
        const client = require('twilio')(config.accountSid, config.authToken)
    }

    crearMensaje = async (mensaje,telefonoDestino)=>{
        try {
            const message = await client.messages.create({
              body: mensaje,
              to: telefonoDestino, //VER DE PASARLO A UNA VARIABLE
              from: '+12345678901',
            });
            console.log(message);
            return message
          } catch (error) {
            // You can implement your fallback code here
            console.error(error);
          }
    }
    
}

export default Notificaciones
