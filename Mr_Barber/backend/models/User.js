import mongoose from "mongoose";
import bcrypt, { hash } from 'bcrypt';
import { uniqueID } from "../utils/index.js";

const userSchema = mongoose.Schema({
    name: {
        type:String,
        requred: true,
        trim: true  
    },
    password: {
        type:String,
        requred: true,
        trim: true  
    },
    email: {
        type:String,
        requred: true,
        trim: true,
        unique: true,
        lowercase: true  
    },
    token: {
        type: String,
        default: () => uniqueID()
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }


})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.checkPassword = async function(inputPassword) {
    return await bcrypt.compare(inputPassword, this.password)
}


const User = mongoose.model('User', userSchema)

export default User