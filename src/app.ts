import express, { Application  } from 'express';
import pokemonRoutes from './routes/pokemon.routes';

const app: Application = express();


app.use('/api/pokemon', pokemonRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});