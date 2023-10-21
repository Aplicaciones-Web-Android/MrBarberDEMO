import mongoose from "mongoose"

function validateObjectId(id, res){
    if(!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error('ID no es válido.')

        return res.status(400).json({
            msg: error.message
        })
    }
}

function handleNotFoundError(message, res){
    if(!service){
        const error = new Error(message)

        return res.status(404).json({
            msg: error.message
        })
    }
}

const uniqueID = () => Date.now().toString(32) + Math.random().toString(32).substring(2)

export{
    validateObjectId,
    handleNotFoundError,
    uniqueID
}