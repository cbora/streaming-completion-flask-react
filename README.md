# Streaming Chat Completion with Flask and React

This project demonstrates how to create a chat interface using OpenAI's GPT API, with a React frontend and Flask backend. The backend streams completions from the GPT API, and the frontend displays these in a chat interface. 

## Project Structure

This project contains two main directories:

1. `frontend`: This contains the React application that renders the chat interface.
2. `run.py`: This is the Flask server file that handles the backend operations.

### Frontend

The frontend is structured as follows:

- `public`: This directory contains static files and the `index.html` file where the React app is hooked.
- `src`: This directory contains all the React JavaScript files, components, and CSS files.

You can run the following commands in this directory:

- `npm start`: Runs the app in development mode.
- `npm test`: Runs the test watcher in an interactive mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes this tool and copies build dependencies, configuration files, and scripts into the app directory.

### Backend

The backend server is a Flask application that communicates with the OpenAI API. It serves two main routes:

- `/`: This route simply returns a "Hello World!" message.
- `/api/prompt`: This is the main API route that takes a `prompt` as a POST request and streams the completions from the GPT API.

The server runs on port 4444, and CORS is handled globally.

## Setup

To set up this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary packages for both the frontend and backend.
3. Replace `YOUR_API_KEY` in `run.py` with your actual OpenAI API key.
4. Start the Flask server by running `python run.py` in the main directory.
5. Start the React application by running `npm start` in the `frontend` directory.

Please note that the Flask server must be running in order for the React app to function properly.
