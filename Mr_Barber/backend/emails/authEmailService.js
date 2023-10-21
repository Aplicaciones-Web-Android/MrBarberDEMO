import { createTransport } from '../config/nodemailer.js'

export async function sendEmailVerification({name, email, token }){
    const transporter = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525,
        "7de69c666c6eae",
        "440bb2200cb6a7"
    )

//Enviar email
const info = await transporter.sendMail({
    from: 'MrBarber',
    to: email,
    subjet: "Mr Barber - Confirma tu cuenta",
    text: "Mr Baber - Confirma tu cuenta",
    html: `<p>Hola: ${name}, confirma tu cuenta en Mr Barber</p>
    <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace</p>
    <a href="http://127.0.0.1:4000/api/auth/verify/${token}">Confirmar cuenta</a>
    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    
    `
})

console.log('Mensaje Enviado', info.messageId)
}

