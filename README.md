![](https://img.shields.io/badge/Microverse-blueviolet)

# LeaderBoard

> In this activity we will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. We will consume the Leaderboard API using JavaScript async and await and add some styling.

![screenshot](./LeaderBoardScreen.JPG)

Additional description about the project and its features.

# Implenting the LeaderBoard API
 - Base URL : https://us-central1-js-capstone-backend.cloudfunctions.net/api/

 ## Endpoints
  **/games/**

  Allowed actions:
   - POST to create a new game

  Mandatory parameters for POST action:
   - name: name of the game

  Parameters example for POST action (sent in the body of the request in JSON format):

  ```json
  { 
	"name": "My cool new game" 
  }
  ```
  Return value: unique identifier for the game

  ```json 
  {
	"result": "Game with ID: Zl4d7IVkemOTTVg2fUdz added."
  } 
  ```

  **/games/:id/scores/**

URL parameters:

- id: unique identifier of the game

URL example: `/games/Zl4d7IVkemOTTVg2fUdz/scores/`

Allowed actions:

- POST to create a new score for the given game
- GET to get a list of scores for the given game

Mandatory parameters for POST action:

- user: name of the user
- score: points (number)

Parameters example for POST action (sent in the body of the request in JSON format):

```json
{ 
	"user": "John Doe",
	"score": 42
}
```

Return value for POST action:

```json
{
	"result": "Leaderboard score created correctly."
}
```

Parameters for GET action: none

Return value for GET action:

```json
{
    "result": [
        {
            "user": "John Doe",
            "score": 42
        },
        {
            "user": "Peter Parker",
            "score": 35
        },
        {
            "user": "Wonder Woman",
            "score": 50
        }
    ]
}
``` 



## Built With

- HTML CSS AND JAVASCRIPT
- NO FRAMEWORKS
- WEBPACK, ES6, AND THE LEADERBOAD API

## Live Demo

[Live Demo Link](https://bonkegcobo.github.io/LeaderBoard/)


## Getting Started

**This is an example of how you may give instructions on setting up your project locally.**
**Modify this file to match your project, remove sections that don't apply. For example: delete the testing section if the currect project doesn't require testing.**


To get a local copy up and running follow these simple example steps.

## Getting Started

**This is an example of how you may give instructions on setting up your project locally.**
**Modify this file to match your project, remove sections that don't apply. For example: delete the testing section if the currect project doesn't require testing.**


To get a local copy up and running follow these simple example steps.

### Prerequisites
  
  1) Web Browser
  2) Code Editor (VS CODE)
  3) Live Server Extension

### Cloning the repo to your local system (if you already have git, installed in your system)

 1) [Copy this Link](https://github.com/BonkeGcobo/LeaderBoard.git)
 2) Open your terminal or command line
 3) [git clone](https://github.com/BonkeGcobo/LeaderBoard.git)
 4) Open the folder with your code editor
 5) Now You can edit the code and check the changes in the browser using Live Server

  ### Install

 ### Web-pack Setup

  1) Install Web-pack: Run npm install webpack
  2) Update Distribution folder with the changes from Source folder: Run npm run build
  3) Check the live changes through the local host: Run npm start


### Run tests

### Check linter errors

 1) Install npm
 2) For HTML: run npx hint.
 3) For CSS: npx stylelint "**/*.{css,scss}"  (--fix, to fix all stylelint errors)
 4) For JS: npx eslint . (--fix, to fix all the js errors)

## Authors

👤 **Bonke Gcobo**

- GitHub: [@githubhandle](https://github.com/BonkeGcobo)
- Twitter: [@twitterhandle](https://twitter.com/bonke_gcobo)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/bonke-gcobo-28a763125/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
