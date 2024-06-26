import { Modelodirecotr } from "../db/directores.ts";
import { Modelopeli } from "../db/pelis.ts";
import { tipopeli } from "../db/pelis.ts";
import { Peli } from '../types.ts';
export const Query={
    Pelis: async(): Promise<Peli[]>=>{
        const peliculas:tipopeli[]= await Modelopeli.find()
        const arraypelisname:Peli[]=[]
        for (let index = 0; index < peliculas.length; index++) {
            const director= await Modelodirecotr.findById(peliculas.at(index)?.director)
            arraypelisname.push({
                id:peliculas.at(index)?._id,
                name:peliculas.at(index)?.name,
                director: director?.name
            })
            
        }
        return arraypelisname;
    },
    Peli: async(        _: unknown,
        args: {id:string}
      ):Promise<tipopeli|null>=>{
        const pelicula:tipopeli|null= await Modelopeli.findById(args.id)
        return pelicula
      },
      pelisdirecotr: async(        _: unknown,
        args: {director:string}
      ):Promise<tipopeli[]|null>=>{
        const director = await Modelodirecotr.findOne({name:args.director})
        const pelis = await Modelopeli.find()
        const pelisdirector:tipopeli[]=[];
        for (let index = 0; index < pelis.length; index++) {
            if(pelis.at(index)?.director.equals(director?._id)){
                pelisdirector.push({
                    id:pelis.at(index)?._id,
                    director:director?._id,
                    name: pelis.at(index)?.name
                })
            }
        }
        return pelisdirector
      },
    };
    