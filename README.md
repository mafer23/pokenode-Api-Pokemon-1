# Pokémon API 🌟

A RESTful API built with **Node.js**, **Express**, and **TypeScript** that interacts with the [PokeAPI](https://pokeapi.co/) to provide information about Pokémon and their types, including translations of types into Spanish and Japanese.

![Pokémon API](https://pokeapi.co/static/pokeapi_256.3fa72200.png)

## 📖 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
  - [List First 100 Pokémon](#list-first-100-pokémon)
  - [Get Pokémon with Type Translations](#get-pokémon-with-type-translations)
- [Project Structure](#project-structure)
- [License](#license)

## ✨ Features

- **List first 100 Pokémon**: Fetches a list of Pokémon with their names and URLs.
- **Get a specific Pokemon and return its “name” and “types”.
- **Get Pokémon with Type Translations**: Retrieves a specific Pokémon's name and types, including translations of type names in Spanish and Japanese.

## ⚙️ Tech Stack

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Minimal and flexible web framework for building APIs.
- **TypeScript**: Static type-checking for JavaScript.
- **PokeAPI**: The Pokémon RESTful API for fetching Pokémon data.
- **pokenode-ts**: A TypeScript client for interacting with PokeAPI.
- **axios**: For making HTTP requests to PokeAPI.
- **axios-cache-interceptor**: Adds caching for improved request performance.
- **nodemon**: Monitors changes and auto-restarts the server in development.

## 🚀 Getting Started


### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/en/download/) (v14.x or later)
- **npm** or **pnpm**: Comes with Node.js, or install [pnpm](https://pnpm.io/installation)

### Installation

1. **Clone the repository**:

    ```bash
   git clone https://github.com/mafer23/pokenode-Api-Pokemon-1
    ```

2. **Navigate to the project directory**:

    ```bash
    cd pokenode-Api-Pokemon-1
    ```

3. **Install dependencies**:

    Using npm:

    ```bash
    npm install
    ```

    Or with **pnpm**:

    ```bash
    pnpm install
    ```

### Running the API

1. **Start the server**:

    ```bash
    npm run dev
    npx ts-node src/app.ts
    ```

    This command will start the development server with **nodemon** for live reloading.

2. The API will run on `http://localhost:3000`.

---

## 📚 API Endpoints

### 1. List First 100 Pokémon

- **Endpoint**: `/api/pokemon`
- **Method**: `GET`
- **Description**: Returns the first 100 Pokémon with their names and URLs.
- **Url**: https://pokenode-api-pokemon-1.onrender.com/api/pokemon
- **Sample Response**:

    ```json
    {
      "results": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
        ...
      ]
    }
    ```

### 2. Get a specific Pokemon and return its “name” and “types”.
- **Endpoint**: `/api/pokemon/:id`
- **Method**: `GET`
- **Description**: Get a specific Pokemon and return its “name” and “types”.
- **Url**: https://pokenode-api-pokemon-1.onrender.com/api/pokemon/1
- **Sample Response**:
    ```json
    {
      "name": "bulbasaur",
     "types": [
        {
          "slot": 1,
          "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
          {
          "slot": 2,
          "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
          }
      }
    ]
    }
    ```

### 3. Get Pokémon with Type Translations

- **Endpoint**: `api/pokemon/pokemonAndTypes/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific Pokémon's name and types, with translations of type names in Spanish and Japanese.
- **Url**: https://pokenode-api-pokemon-1.onrender.com/api/pokemon/pokemonAndTypes/1
- **Sample Response**:

    ```json
    {
      "name": "bulbasaur",
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/",
            "names": [
              {
                "language": "es",
                "name": "Planta"
              },
              {
                "language": "ja",
                "name": "くさ"
              }
            ]
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/",
            "names": [
              {
                "language": "es",
                "name": "Veneno"
              },
              {
                "language": "ja",
                "name": "どく"
              }
            ]
          }
        }
      ]
    }
    ```

---

## 🗂️ Project Structure

```bash
.
├── src
│   ├── controllers   # Handles API requests
│   ├── services      # Business logic and data fetching
│   ├── routes        # API route definitions
├── package.json
├── tsconfig.json
└── README.md
```
## Deploy

https://render.com/
