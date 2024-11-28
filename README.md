# React + vite

# Employment Agreement Management App

This project is a web application built with React that allows users to manage employment agreements. Users can view, create, and update employment agreements through a responsive interface. It is integrated with a mock REST API using JSON Server and includes state management using React Context.

## Features

- **Dashboard**: View a list of all employment agreements with basic details like Employee Name, Department, Position, and Agreement Date.
- **AgreementDetails**: Displays the details of a specific agreement.
- **AgreementForm**: Handles Create and Update operations.

## Tech Stack

- **Frontend**: React.js, Bootstrap (for styling), React Router, React Context API
- **Backend**: JSON Server (mock REST API)
- **State Management**: React Context API
- **Testing**: Jest, React Testing Library (for unit testing)

## Project Setup

Follow these steps to get the project up and running locally.

### Prerequisites

- Node.js
- npm

## Install dependencies

cd React-UI
npm install

## Set up JSON Server
1) Install JSON Server globally:

npm install -g json-server

2) Start the JSON Server to create a mock API:

json-server --watch db.json --port 5000

## Run the React App

npm run dev

![emp-agreement-app-output-1.PNG](assets/emp-agreement-app-output-1.PNG)
![emp-agreement-app-output-2.PNG](assets/emp-agreement-app-output-2.PNG)
![Screenshot](assets/emp-agreement-app-output-3.png)
