# Basket E-commerce

This is a modern, responsive e-commerce web application built with React. It provides a seamless shopping experience, allowing users to browse products, add items to their cart and wishlist, filter and sort products, and proceed to checkout.

## Features

-   **Product Browsing:** View a list of available products.
-   **Product Details:** Click on a product to see more details.
-   **Shopping Cart:** Add and remove products from a shopping cart.
-   **Wishlist:** Add and remove products from a wishlist.
-   **Filtering:** Filter products by category, price range, and availability.
-   **Sorting:** Sort products by price (low to high, high to low) and rating.
-   **User Authentication:** Simple login and registration functionality.
-   **Checkout Process:** A simulated checkout process for authenticated users.
-   **Responsive Design:** The application is designed to work on various screen sizes, from mobile to desktop.

## Project Structure

The project is organized into the following main directories:

-   `public/`: Contains static assets like images and the main `index.html` file.
-   `src/`: Contains all the source code for the React application.
    -   `app/`: Redux store configuration.
    -   `assets/`: SVG files for icons.
    -   `components/`: Reusable React components that make up the UI of the application (e.g., Header, Footer, ProductList).
    -   `features/`: Redux slices for managing different parts of the application's state (e.g., cart, user, products).
    -   `main.jsx`: The entry point of the React application.

## ⚡ Performance Features

- Lazy loading for images
- Code splitting for optimal bundle size
- Memoized components for better performance
- Local storage for cart persistence


## Installed Libraries

### Core Libraries

-   **React (`react`, `react-dom`):** A JavaScript library for building user interfaces.
-   **Vite (`vite`):** A fast build tool and development server for modern web projects.
-   **React Router (`react-router`):** For handling navigation and routing within the application.

### State Management

-   **Redux Toolkit (`@reduxjs/toolkit`):** The official, opinionated, batteries-included toolset for efficient Redux development. It simplifies store setup, reducers, and asynchronous actions.
-   **React Redux (`react-redux`):** Official React bindings for Redux, allowing React components to interact with the Redux store.

### UI and Styling

-   **Material-UI (`@mui/material`, `@mui/icons-material`):** A popular React UI framework that provides a set of customizable and reusable components.
-   **Emotion (`@emotion/react`, `@emotion/styled`):** A library designed for writing CSS styles with JavaScript. It's used by Material-UI for styling components.
-   **Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`):** A utility-first CSS framework for rapidly building custom designs.

### Utilities

-   **UUID (`uuid`):** For generating unique IDs, used here for new user registration.

### Development Dependencies

-   **ESLint (`eslint`):** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
-   **Vite React Plugin (`@vitejs/plugin-react`):** Enables React support in Vite with Fast Refresh.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs the ESLint linter to check the code for any style issues or errors.

### `npm run preview`

Serves the production build from the `dist` folder locally to preview it before deployment.

## Getting Started

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd basket-e-commerce
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```
3.  **Run the development server:**
    ```sh
    npm run dev
    ```