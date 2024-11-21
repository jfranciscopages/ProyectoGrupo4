import config from '../config.js'
import sgMail from '@sendgrid/mail'

/* Your AccountSID and Auth Token from console.twilio.com */
class Notificaciones {
    constructor() {
    }

    enviarNotificacionBienvenida = async (cliente)=>{
      try {
          const asunto = `Bienvenido ${cliente.nombre} ${cliente.apellido}`
          const mensaje = `Bienvenido ${cliente.nombre} ${cliente.apellido} a nuestro sistema.`
          const maildestino = cliente.mail
          this.enviarNotificacion(asunto,mensaje,maildestino)
        } catch (error) {
          console.error(error);
        }
      }
      enviarNotificacion = async (asunto,mensaje,mailDestino)=>{
        try {
          
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
              to: mailDestino, // Change to your recipient
              from: process.env.SENDGRIP_SENDER, // Change to your verified sender
              subject: asunto,
              text: mensaje,
              html: `<strong>${mensaje}</strong>`,
            }
            console.log(msg)
            const response = await sgMail.send(msg)
            console.log(response)
          } catch (error) {
            console.error(error);
          }
        }
  
}

export default Notificaciones
