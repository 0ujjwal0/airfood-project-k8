# React Meal Selection App

## Overview

This project is a meal selection application built with React and a backend server using Node.js and Express. Users can select meals, view detailed information about each meal, and see the total price of selected items. The backend serves meal data in JSON format.

## Features

- **Meal Selection:** Users can select and deselect meals.
- **Tag Filtering:** Meals can be filtered by tags.
- **Dynamic State Management:** Efficiently handles state for selected items and users.
- **Responsive Design:** Fully responsive and mobile-friendly interface.
- **Backend Integration:** Fetches meal data from a backend server.

## Technologies Used

- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm

### Clone the Repository

```bash
git clone https://github.com/your-username/react-meal-selection-app.git
cd react-meal-selection-app

### Install the dependencies
npm install

## Running the application

### Start the backend server
cd airfood-backend
node server.js

The backend server will be running at http://localhost:3000.
or if you want to deploy the project then use this web service which is already hosted on render.com -->>https://airfood-project.onrender.com/api/meals put this api in the airfood-frontend>src>components>order.jsx replace localhost:3000/api/meals with above link

## Start the Frontend

cd airfood-frontend
npm run dev

frontend will now run on https://localhost:3000 containing all the food fetched from localhost api with /api/meals endpoint

## Building for Production
To create a production build, run:

npm run build

This will generate a dist folder containing the build output.

## Deployment
### Deploying with Vercel
 1) Log in to your Vercel account.
 2) Create a new project and link it to your GitHub repository.
 3) In the project settings, set the build command to npm run build and the output directory to dist.
 4) Deploy the project.

 ### Backend Deployment
   You can deploy your backend server to any platform that supports Node.js. Ensure the PORT environment variable is set correctly.

## Usage
### Selecting Meals
Navigate through the list of meals.
Click on the Select button to add a meal to your selection.
Click again to deselect.
### Filtering by Tags
Use the tags component to filter meals based on specific tags.
### Viewing Total Price
The total price of selected items is displayed dynamically in the Total component.

## Folder Structure

airfood-project/
|--airfood-backend/
|   |-- data.json
|   |-- package-lock.json
|   |-- server.js
|--airfood-frontend/
|   |-- public/
├   |-- src/
│       ├── components/
|            |-- list/
│               ├── Person.jsx
│               ├── Tags.jsx
│               ├── List.jsx
│               ├── Total.jsx
|            |-- home.jsx
|            |-- nav.jsx
|            |-- order.jsx
│       |-- App.jsx
│       |-- main.jsx
|       |-- index.css
|   |── package.json
|   |── README.md
|   |-- tailwind.config.js
|   |--vite.config.js


## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.