import express, { application } from 'express'
import { db } from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import servicesRoutes from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import userRoutes from './routes/userRoutes.js'

//Variables de entorno
dotenv.config()

//Configurar aplicacion
const app = express()

//Leer datos 
app.use(express.json())

//Conectar a BD
db()

//Configurar la BD
const whiteList = [process.env.FRONTEND_URL]

if(process.argv[2] === '--postman'){
    whiteList.push(undefined)
}

const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            //permite conexion
            callback(null, true)
        }else{
            //no permite conexion
            callback(new Error('Error de cors'))
        }
}}
app.use(cors(corsOptions))

//Definir ruta
app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/users', userRoutes)

//Definir puerto
const PORT = process.env.PORT || 4000

//Arrancar app
app.listen(PORT, () => {
    console.log("El servidor se esta ejecutando en el puerto:", PORT)
})   

