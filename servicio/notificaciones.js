import config from '../config.js'
import twilio from 'twilio'

/* Your AccountSID and Auth Token from console.twilio.com */
class ServicioNotificaciones {
    constructor() {
    const client = twilio(process.env.accountSid,process.env.authToken);
        //const client = require('twilio')(config.accountSid, config.authToken)
    }

   enviarNotificacion = async (cliente)=>{
          try {
            const mensaje = 'Bienvenido ' + cliente.nombre + " " + cliente.apellido + " a nuestro sistema." 
            const message = await this.client.messages.create({
            body: mensaje,
            messagingServiceSid: "MG789a192c33de5f3a64422ee3c687d7f0", //NUMERO DE TWILIO
            to: cliente.celular, //VER DE PASARLO A UNA VARIABLE
            });
            console.log(message);
            return message
          } catch (error) {
            // You can implement your fallback code here
            console.error(error);
          }
    }
/*
           async createMessage() {
            const message = await client.messages.create({
              body: "This is a WhatsApp message sent with Twilio!",
              messagingServiceSid: "MG789a192c33de5f3a64422ee3c687d7f0",
              to: "whatsapp:+15557770006",
            });
          
            console.log(message.body);
          }
          
           createMessage();      
     */   
}

export default ServicioNotificaciones
