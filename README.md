# Poké Habitat

What Pokémon can be found lurking in caves? In the forest? Find out with Poké Habitat!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Poké Habitat allows users to find out which Pokémon can be found in various terrain types. It makes calls to the [PokéAPI](https://pokeapi.co/).

![Main Page](./assets/pokehabitat.png?raw=true)

Because there are a finite number of available habitats on the PokéAPI (nine as of this writing), the application, once mounted, makes a primary call to ```https://pokeapi.co/api/v2/pokemon-habitat/``` in order to populate a drop-down box with terrain options.

![Dropdown](./assets/dropdown.png?raw=true)

When a desired terrain is selected, simply hit the search button. The page will soon be populated by cards representing Pokémon that can be found in the selected habitat.

![Pokésearch](./assets/pokesearch.png?raw=true)

Clicking on a card will take the user to a corresponding entry in the Pokédex at ```https://pokemon.gameinfo.io```.

## Requirements

- React 17.0.1
- Axios 0.21.0

## Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
