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
      
}