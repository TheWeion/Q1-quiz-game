# Q1
> An online quiz game developed using React.

**Status:** [![Netlify Status](https://api.netlify.com/api/v1/badges/904a59cf-8476-4950-8dc4-4c269bfa91cc/deploy-status)](https://app.netlify.com/sites/q1-fp/deploys)

## Requirements
### Your website should have the following functionality for users:
- Users should be able start a game with a limited number of players _(this can be from one computer or you may wish to consider use of websockets eg. [SocketIO](https://github.com/getfutureproof/fp_guides_wiki/wiki/Intro-to-Socket.IO)_
- Users should be able to choose the level and topic for their quiz game.
- Users should take it in turns to answer trivia questions and after a set number of turns a winner should be declared.
- Users scores should be stored in a database at the end of the game
- Users should be able to view a high scores list

#### Your project should meet the following technical requirements:
- Client to be written using React (Redux is optional)
- A small API connected to a database of scores
- Make use of an open API such as [Open Trivia DB](https://opentdb.com/api_config.php)
- Minimum 60% test coverage with an aim of 80%

<hr>

## Installation & Usage

* Run `npm install` to install packages.

### Usage

* Run `npm run build` to build the app for a production environment.
* Run `npm run dev` to start the app in a development environment.
* Run `npm run test` to run test suites.
* Run `npm run coverage` to check test code coverage.

* The live website can be accessed: [HERE](https://q1-fp.netlify.app/)

## Changelog

### v0.1.5 - Alpha "**pops** Pass the Champagne" Release (21/07/2022)

- [x] Handled Single Player flow.

- [x] Added Q1 Logo.

- [x] Player Data fixes.

- [x] Added dompurify.

### v0.0.4 - Alpha "Vroom, Vroom" Release (20/07/2022)

- [x] Implemented Socket.IO.

- [x] Added fonts.

- [x] UI fixes.

- [x] Added sanitize for innerHTML in Timeline component.

### v0.0.3 - Alpha "3, 2, 1, Race!" Release (19/07/2022)

- [x] Added Timer and Penalty.

- [x] Added the Podium component to the app and added to GUI.

- [x] Added DRS and Pit Stop game mechanics.

### v0.0.2 - Alpha "Box, Box" Release (18/07/2022)

- [x] Added `react-bootstrap` to the project for UI components.

- [x] Defect fixes.

- [x] Implemented Timeline.

- [x] Added `react-router-dom` to the dependencies.

- [x] Added Routes and Game Event Pages to the app.

### v0.0.1 - Alpha "Off to the Pit with ye" Release (15/07/2022)

- [x] Initial Commit to GitHub using React Create App.

## TODO

- [ ] 

## Bugs

- [ ] 

> Designed by the quiz masters: Aleks, Dakshitha, Terry, and Wing
