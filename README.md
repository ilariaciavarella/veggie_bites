![Veggie Bites logo](src/assets/images/readme/veggie_bites-readme_icon.svg)

# Veggie Bites

Welcome to Veggie Bites, your go-to hub for tasty vegetarian recipes! Explore delicious meals and start your cooking journey today.

[![Website][website-shield]][website-url]

## Description

Discover a world of delicious vegetarian recipes with Veggie Bites! Whether you're a seasoned vegetarian or just looking to add more plant-based meals to your diet, Veggie Bites has something for everyone. Powered by the Spoonacular API, Veggie Bites lets you easily search for a wide variety of healthy and delicious veggie dishes.

![Animated gif of a research](src/assets/images/readme/veggie_bites-usage.gif)

### Features

- **Search Recipes**: Find recipes by typing keywords in the search bar.
- **Detailed Instructions**: Get step-by-step cooking instructions for each recipe.
- **Vegan Filter**: Toggle the 'Vegan Friendly' filter to show only vegan recipes.

### Technologies used

- [**React**](https://react.dev/): Core library for building the UI.
  - [**Create React App**](https://github.com/facebook/create-react-app): Tool to set up the web app by running one command.
  - [**React Router**](https://reactrouter.com/en/main): Library for routing in React applications.
- [**Bootstrap**](https://getbootstrap.com/) and [**React Bootstrap**](https://react-bootstrap.netlify.app/): Frameworks for styling the application.
- [**Axios**](https://axios-http.com/): Promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

To run this project, you will need:

- A web browser (e.g., Google Chrome, Mozilla Firefox)
- A code editor (e.g., Visual Studio Code, Atom)

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/ilariaciavarella/veggie_bites.git
   ```

2. Navigate to the project directory;

3. Install all the necessary dependencies;
   ```
   npm install
   ```
4. Add an `.env` file to your folder that will contain:
   - The base API url: https://api.spoonacular.com/recipes/
   - Your API Key that you can get on the Spoonacular website
   ```
   REACT_APP_API_KEY = *Your Api Key*
   REACT_APP_API_BASE_URL = "https://api.spoonacular.com/recipes/"
   ```
   **Note:** the variables names must be exactly these ones.

### Usage

To open the app in your web browser, you have two options based on your goal:

1. You can either run the app in development mode
   ```
   npm start
   ```
2. Or, you can create the production build
   `   npm run build`
   Then, run the build
   `   npm install -g serve
 serve -s build`
   Once you have chosen your preferred way, you can start exploring the web app:
3. **Search**: Type your query in the search bar and press Enter or click the submit button.
4. **Browse recipes**: Explore the collection of recipes matching your search.
5. **Vegan filter**: Toggle the 'Vegan Friendly' filter to display only vegan meals.
6. **Recipe details**: Click on a recipe to read its instructions and see the ingredients.

---

Feel free to explore the code of the files in the `src` folder to understand how the web app functionalities are implemented.

## API Integration

This web application relies on the [Spoonacular API](https://spoonacular.com/food-api) to fetch data about the recipes that are displayed.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub;
2. Create a new branch with a descriptive name;
3. Make your changes and commit them with clear messages;
4. Push your branch to your forked repository;
5. Submit a pull request to the original repository.

## Contact

Nice to meet you, I'm Ilaria!

Reach out to me anytime, here are the links:

[![GitHub][github-shield]][github-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

[![Instagram][instagram-shield]][instagram-url]

<!-- LINKS & IMAGES -->

[website-shield]: https://img.shields.io/badge/CLICK_HERE_TO-TRY_IT_OUT!-8222A5?style=for-the-badge&labelColor=F7A565&color=8222A5
[website-url]: https://veggie-bites.netlify.app/
[github-shield]: https://img.shields.io/badge/GitHub-D91254?style=flat-square&label=See%20my%20work%20on&labelColor=1C1719
[github-url]: https://github.com/ilariaciavarella
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-2FB6B2?style=flat-square&label=Connect%20with%20me%20on&labelColor=1C1719
[linkedin-url]: https://www.linkedin.com/in/ilaria-ciavarella/
[instagram-shield]: https://img.shields.io/badge/Instagram-D91254?style=flat-square&label=Follow%20me%20on&labelColor=1C1719
[instagram-url]: https://www.instagram.com/lil.ciavarella/
