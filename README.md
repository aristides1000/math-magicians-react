# Pokedex Javascript Capstone Project

> This is a JavaScript project in which a user can see a list of all existing Pokémon and can add likes to their favorite Pokémon, this application was made with the API service called PokeAPI.
![screenshot](./1_screenshot.png)
![screenshot](./2_screenshot.png)
![screenshot](./3_screenshot.png)
![screenshot](./4_screenshot.png)

## Built With

- HTML
- CSS
- JavaScript
- ESLint
## Live Demo

[Live Demo Link](https://rawcdn.githack.com/zainsadaqat/javascript-capstone-pokeapi/9c23e92fb394f561100659025d7f10774130146d/dist/index.html)

## Getting Started
1. Clone this repo on your local machine

2. In the path where your repository is located, you will open your terminal.

3. In the path where your repository is located you are going to open your terminal and put ```npm install``` hit enter, after that type the command ```npm start```.

4. Enjoy.

5. Open the developer tools of your favorite browser and go to the console tab.

6. Put the following code inside the console:

```
fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
  method: 'POST',
  headers: {
    'Content-type': 'text/html',
  },
})
  .then((res) => res.text())
  .then((text) => text);
```

### Prerequisites
To make this repository working in your local machine you need only a browser.

## Author

👤 **Arístides José Molina Pérez**

- Github: [@aristides1000](https://github.com/aristides1000)
- Twitter: [@aristides_1000](https://twitter.com/aristides_1000)
- Linkedin: [Aristides Jose Molina Perez](https://www.linkedin.com/in/aristides-molina/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/aristides1000/math-magicians-react/issues).


## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Ariel Camus CEO Microverse: For letting us start this journey.
- Google: For letting us find crucial information in order to create this project.

## 📝 License

This project is [CC0-1.0](LICENSE) licensed.