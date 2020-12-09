# Gloomhaven Attack Modifier Deck
## `This Is A Work In Progress`

[Gloomhaven](http://www.cephalofair.com/gloomhaven) by [Cephalofair Games](http://www.cephalofair.com/) [Developer: Isaac Childres]

The purpose of this project is to create a fully functional, data-driven Gloomhaven Attack Modifier deck, which provides helpful game-condition feedback to the player, and live draw statistics as the deck is used.


## Usage

The app in its current state is an Attack Modifier Deck with 4 options

* `Draw!` - Discard any cards in hand.  Draw a card from the downfacing "Ready" stack, place it in your new hand. If `Advantage` or `Disadvantage` are set, draw 2 cards. If a card is drawn that requires a shuffle, the Shuffle button will glow.
* `Shuffle` - Place any temporary cards in hand into the consumed stack.  Combine discard and any remaining cards in hand with the downfacing "Ready" stack, and randomize.  Remove any Advantage or Disadvantage flags if set.  Remove shuffle indicator if set.
* `Advantage` - Sets Advantage flag.  Draw will pull 2 cards from the deck, and unset the flag.
* `Disadvantage` - Sets Disdvantage flag.  Draw will pull 2 cards from the deck, and unset the flag.


## Features

### Current
* Configurable Deck Composition
* 4 distinct card states:
    * `Ready` - Ready to be drawn
    * `Hand` - Card is removed from `Ready` and placed here for scrutiny
    * `Consumed` - Temporary cards removed from the `Hand` and placed here, not to be used again
    * `Discard` - Normal cards are removed from the `Hand` and placed here, to be reused on next Shuffle
* Meaningful aesthetics for the card states, and transitions between states.
* Support `Advantage` and `Disadvantage` Draw states. 
* Calculate value of each card, to be used for `Advantage`/`Disadvantage` comparisons in future versions of the app. 
* Control Panel for interacting with the deck, and setting Draw states
* Visual "active" indicators for Control Panel buttons, where appropriate

### Coming
* Visual indicator on `Advantage` or `Disadvantage` for which card 
* Support for Rolling attack modifiers
* Data visualizations indicating various draw probabilities
* Visual indicators to denote `Blessed` or `Cursed` (or both!) status 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn storybook`

Launches the project storybook.


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
