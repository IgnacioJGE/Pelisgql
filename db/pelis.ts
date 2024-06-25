import mongoose from 'mongoose';
import { Peli } from '../types.ts';

const Schema= mongoose.Schema;


const schemaPeli= new Schema({
name:{type:String,required:true},
director:{type:Schema.Types.ObjectId,required:true}
},
{timestamps:true})


export type tipopeli= mongoose.Document & Omit<Peli,"id"|"director">&{director:mongoose.Types.ObjectId}

//esto se ejcuta cada vez que se crea una peli o cuando se actualiza
schemaPeli.path("director").validate(async function 
    (value:mongoose.Types.ObjectId) {
    
        if(value===this.director){
            return true;
        }

        const director= mongoose.models.Directores.findById(value)
        if(!director){
            throw new Error(`Director con id: ${value} no existente`)
            
        }
        return true;
})

export const Modelopeli= mongoose.model<tipopeli>("Peliculas",schemaPeli)
