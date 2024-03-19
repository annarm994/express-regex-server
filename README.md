# express-regex-server
Assignment 8

This project demonstrates the use of regular expressions in route paths in an Express Node.js server to handle multiple URL variations.

# Instructions for Running the Server

Make sure you have Node.js and npm installed on your machine.
Clone this repository or download the project files to your local machine.

Navigate to the project directory in your terminal.
Install project dependencies by running:
npm install

# Running the Server
Start the server by executing the following command:
node app.js

The server will start listening on the default port 3000. You can specify a different port by setting the PORT environment variable before starting the server.

# Accessing the Server

Once the server is running, you can access it using a web browser.
Use the following URL variations to test the server's functionality:

http://localhost:3000/user
http://localhost:3000/user/yourname
http://localhost:3000/user/anothername

Explanation of Regular Expressions in Route Paths:
In this project, regular expressions are used in route paths to match multiple URL patterns. Specifically, the route path ^\/user(?:\/(\w+))?$ is used. Here's a breakdown of the regular 


# Evaluation Criteria
Correct Implementation of Regular Expressions: 
The project correctly implements regular expressions in route paths to match multiple URL variations as specified in the assignment.
