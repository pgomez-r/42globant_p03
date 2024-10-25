# TripRecommendator

TripRecommendator is the first draft of an under-construction larger project which aims to be an AI-based trip recommendator. As it stands now, it features a search bar that sends prompts to the Gemini AI and displays the response.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: The official, recommended way to write Redux logic.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Current Features

- **Search Bar**: Allows users to input a prompt which is then sent to the Gemini AI. The AI's response is displayed below the search bar.

## Project Status

This project is currently in its early stages of development. Future updates will include more features and enhancements to provide comprehensive trip recommendations.

## How to Setup and Use

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/pgomez-r/42globant_p03 TripRecommendator
    cd TripRecommendator
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```
3. **Add your Gemini API key**:
    Open the file `src/component/SearchBar.js` and replace `"YOUR_API_KEY"` in line 16 with your actual Gemini API key.

4. **Run the development server**:
    ```sh
    npm start
    ```

    This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes, and you may also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm run eject`**: Removes the single build dependency from your project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

---

This README will be updated as the project evolves. Stay tuned for more features and improvements!
