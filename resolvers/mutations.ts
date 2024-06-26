import { tipodirector } from "../db/directores.ts";
import { tipopeli } from "../db/pelis.ts";
import { Modelodirecotr } from "../db/directores.ts";
import { Modelopeli } from "../db/pelis.ts";
import { GraphQLError } from "graphql";



export const Mutation={
    addDirector: async (
        _: unknown,
        args: { name: string; age:number}
      ): Promise<tipodirector> => {
        try {
            const newDirector =  new Modelodirecotr({
                name:args.name,
                age:args.age
            });
            await newDirector.save()
            return newDirector;
          } catch (error) {
            console.error("Error creating pet:", error);
            throw new GraphQLError("Failed to create pet");
          }
      },
      addPeli: async (
        _: unknown,
        args: { name: string; director:string}
      ): Promise<tipopeli> => {
        try {
            const newPeli =  new Modelopeli({
                name:args.name,
                director:args.director
            });
            console.log()
            await newPeli.save()
            return newPeli;
          } catch (error) {
            console.error("Error creating pet:", error);
            throw new GraphQLError("Failed to create pet");
          }
      },
      deletePeli: async (
        _: unknown,
        args: { id:string}
      ): Promise<tipopeli> => {
        try {
            const pelimostrar= await Modelopeli.findById(args.id)
            await Modelopeli.findByIdAndDelete(args.id)
            return pelimostrar;
          } catch (error) {
            console.error("Error creating pet:", error);
            throw new GraphQLError("Failed to create pet");
          }
      },
      deleteDirector: async (
        _: unknown,
        args: { id:string}
      ): Promise<tipodirector> => {
        try {
            const directormostrar= await Modelodirecotr.findById(args.id)
            await Modelodirecotr.findByIdAndDelete(args.id)
            return directormostrar;
          } catch (error) {
            console.error("Error creating pet:", error);
            throw new GraphQLError("Failed to create pet");
          }
      },
      updatePeli: async (
        _: unknown,
        args: { id:string,name: string; director:string}
      ): Promise<tipopeli> => {
        try {
            const epleimostrar= await Modelopeli.findByIdAndUpdate(args.id,{
                name:args.name,
                director:args.director
            })
            return {name:args.name,director:args.director,id:epleimostrar?._id};
          } catch (error) {
            console.error("Error creating pet:", error);
            throw new GraphQLError("Failed to create pet");
          }
      },
      
}