
# Connecting-React-to-MongoDB

This  is a sample project that connects a React front-end application with a MongoDB database using a NodeJS back-end. The project demonstrates how to send data from a form in React to a MongoDB database through a NodeJS back

## Features

- React Front-end: The project includes a React front-end application that sends data to the MongoDB database through a NodeJS back-end.

- MongoDB Database: The project uses a MongoDB database to store and retrieve data.

- NodeJS Back-end: The project includes a NodeJS back-end that provides an API for the React front-end to send data to the database.

## Getting Started

- Clone this repository: git clone https://github.com/VedantGawande773/Connecting-React-to-MongoDB.git.

- Install the dependencies: npm install
- Start the NodeJS back-end: npm run server
- Start the React front-end: npm start
- The React front-end will be available at http://localhost:3000, and the NodeJS back-end will be available at http://localhost:8080.

## Usage

To use this project, you can perform the following steps to send data from a form in React to the MongoDB database:

To send a input taken in form to database perform the following steps: 

- Create a form in the React front-end with input fields for the data you want to send.

- Use the axios library to send a POST request to the NodeJS back-end with the form data.
- In the NodeJS back-end, use the mongoose library to connect to the MongoDB database and create a schema for the data you want to send.
- Use the schema to create a model for the data, and then save the data to the database.

## Tech Used 

- React: A JavaScript library for building user interfaces.

- MongoDB: A NoSQL document-based database.
- NodeJS: A JavaScript runtime environment that executes JavaScript code outside of a web browser.
- Axios: A promise-based HTTP client for the browser and NodeJS.
- Mongoose: An object modeling tool for MongoDB.
## License


This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for details.
