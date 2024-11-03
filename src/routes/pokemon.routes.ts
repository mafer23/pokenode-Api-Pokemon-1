import { Router } from 'express';
import PokemonController from '../controllers/pokemon.controller';

const router: Router = Router();

// Ruta para obtener un Pokémon por nombre
router.get('/:name', PokemonController.getPokemonByName);

// Ruta para obtener los primeros 100 Pokémon
router.get('/', PokemonController.getFirst100Pokemons);

// Ruta para obtener los datos y tipos de un Pokémon por ID
router.get('/pokemonAndTypes/:id', PokemonController.getPokemonAndTypes);


export default router;
