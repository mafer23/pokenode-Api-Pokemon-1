import { PokemonClient } from 'pokenode-ts';

class PokemonService {
  private api: PokemonClient;

  constructor() {
    this.api = new PokemonClient();
  }
 // Método para obtener un Pokémon por nombre
  public async getPokemonByName(name: string) {
    try {
      const pokemon = await this.api.getPokemonByName(name);
      return {
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: pokemon.abilities.map((ability) => ability.ability.name),
      };
    } catch (error) {
      throw new Error('Error fetching Pokemon data');
    }
  }
 // Método para obtener los primeros 100 Pokémon
  public async getFirst100Pokemons(){
    try {
        const { results} = await this.api.listPokemons(0,100);
        return results.map( pokemon =>({
            name: pokemon.name,
            url: pokemon.url
        }));
    } catch (error) {
        throw new Error('Error fetching Pokemon list');
    }
  }
 
  // Método para obtener un Pokémon por su ID y traducir sus tipos
  public async getPokemonAndTypes(id: number) {
    try {
      // Obtenemos el Pokémon por su ID
      const pokemon = await this.api.getPokemonById(id);

      // Procesamos sus tipos para obtener las traducciones en español y japonés
      const types = await Promise.all(
        pokemon.types.map(async (typeInfo) => {
          // Obtenemos información del tipo de Pokémon
          const typeData = await this.api.getTypeByName(typeInfo.type.name);

          // Filtramos los nombres por el idioma español y japonés
          const translatedNames = typeData.names.filter((nameObj) =>
            nameObj.language.name === 'es' || nameObj.language.name === 'ja'
          );

          return {
            slot: typeInfo.slot,
            type: {
              name: typeInfo.type.name,
              url: typeInfo.type.url,
              names: translatedNames.map((nameObj) => ({
                language: nameObj.language.name,
                name: nameObj.name,
              })),
            },
          };
        })
      );

      // Retornamos el nombre del Pokémon y sus tipos con las traducciones
      return {
        name: pokemon.name,
        types,
      };
    } catch (error) {
      throw new Error('Error fetching Pokemon and its types');
    }
  }

}

export default new PokemonService();
