# React + Vite Todo App

This project is a simple Todo application built with React and Vite. It allows users to add, filter, mark as complete, and delete tasks.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)
- Persistent storage using `localStorage`
- Notifications using `react-toastify`

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Todo_app

2. Install dependencies

    -> npm install
    Running the Application

3. To start the development server:

    npm run dev

4. Open your browser and navigate to

   http://localhost:5173.

5. Building for Production
To build the application for production:   npm run build




The production-ready files will be in the dist directory.

Testing the Application
1. Start the development server using npm run dev.
2. Open the application in your browser.
3. Perform the following actions to test:
        -> Add a new task and verify it appears in the list.
        -> Mark a task as completed and ensure it moves to the completed section.
        -> Delete a task and confirm it is removed from the list.
        -> Use the filter buttons (All, Active, Completed) to verify filtering works correctly.
        -> Refresh the page and ensure tasks persist using localStorage.




Submitting Code to Git

1. Stage your changes:- git add .
2. Commit your changes with a meaningfull message:- git commit -m "Add feature or fix description"
3. Push your changes to the repository:- git push origin <branch-name>



Replace <repository-url> with your Git repository URL and <branch-name> with the branch you are working on.


React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
Expanding the ESLint Configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and typescript-eslint in your project.


