import mongoose from 'mongoose';
import { Director } from "../types.ts";


const Schema = mongoose.Schema;

const schemaDirectotr= new Schema({
name:{type:String,reqired:true},
age:{type:Number,required:true}
},
{timestamps:true})

export type tipodirector = mongoose.Document & Omit<Director, "id">


schemaDirectotr.post('findOneAndDelete',async function (doc:tipodirector) {
    await mongoose.models.Peliculas.deleteMany({director:doc._id})
})

export const Modelodirecotr= mongoose.model<tipodirector>("Directores",schemaDirectotr)