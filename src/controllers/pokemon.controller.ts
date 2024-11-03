import { Request, Response } from 'express';
import PokemonService from '../services/pokemon.service';

class PokemonController {
  
   // Obtener un Pokémon por su nombre
  public static async getPokemonByName(req: Request, res: Response): Promise<void> {
    const { name } = req.params;
    try {
      const pokemon = await PokemonService.getPokemonByName(name);
      res.status(200).json(pokemon);
    } catch (error) {
      res.status(404).json({ error: 'Pokemon not found' });
    }
  }



   

   
  // Obtener los primeros 100 Pokémon
  public static async getFirst100Pokemons(req: Request, res:Response): Promise<void>{
    try {
        const pokemons = await PokemonService.getFirst100Pokemons();
        res.status(200).json({results: pokemons});
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Pokemon list'})
    }
  }
 
  //Obtener los datos de un Pokémon y sus tipos con traducciones
   public static async getPokemonAndTypes(req: Request, res: Response): Promise<void>{
     const { id } = req.params;
     //console.log(`Fetching Pokemon with ID: ${id}`); 
     try {
       const pokemonWithTypes =await PokemonService.getPokemonAndTypes(parseInt(id, 10));
       res.status(200).json(pokemonWithTypes);
     } catch (error) {
       res.status(404).json({error: 'Pokemon not found or error fetching data' })
     }
   }


}

export default PokemonController;
