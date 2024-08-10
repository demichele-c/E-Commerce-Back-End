# E-Commerce-Back-End

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Description


This project is a back-end e-commerce application that manages product categories, products, and tags using Sequelize ORM and PostgreSQL. It provides RESTful API endpoints for CRUD (Create, Read, Update, Delete) operations, enabling efficient handling of product data and its relationships. With Express.js for routing and Sequelize for database management, the project offers a scalable and organized solution for integrating with a front-end system, streamlining inventory management, and maintaining a robust e-commerce platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

To install and run the e-commerce back-end application, first clone the repository from GitHub using git clone <https://github.com/demichele-c/E-Commerce-Back-End>. Navigate to the project directory with cd <E-Commerce-Back-End>, then install the necessary dependencies by running npm install. Ensure you have PostgreSQL installed and create a new database for the project. Configure your database credentials in the .env file, setting DB_USER, DB_PASSWORD, DB_NAME, and DB_HOST with your PostgreSQL details. Once your environment is set up, run database migrations with npx sequelize-cli db:migrate to create the necessary tables. Finally, start the application in development mode using npm run dev, and the server will be accessible at http://localhost:3001.

## Usage

To use the e-commerce back-end application, interact with the API endpoints to manage categories, products, and tags. Use GET /api/categories to retrieve all categories or GET /api/categories/:id to fetch a specific category by ID. Similarly, access products with GET /api/products or GET /api/products/:id, and manage tags with GET /api/tags or GET /api/tags/:id. To create new entries, send POST requests to the appropriate endpoints with the necessary data in the request body. Update existing records with PUT requests to /api/products/:id or /api/tags/:id, and remove entries using DELETE requests to /api/products/:id or /api/tags/:id. The server will handle data interactions and respond with appropriate status codes and messages.


## Contributing

To contribute to the e-commerce back-end project, please follow these guidelines: Fork the repository and create a feature branch from main for your changes. Ensure that your code adheres to the project's coding standards and includes appropriate comments. Before submitting a pull request, thoroughly test your changes locally and update any relevant documentation or tests. Submit your pull request with a clear description of the changes and the issue it addresses. Contributions are reviewed based on their relevance, functionality, and adherence to project guidelines. Please be respectful and considerate in all communications and interactions.

## Tests

To test the e-commerce back-end application, you can use Insomnia, a powerful REST client that simplifies API testing. Begin by setting up Insomnia and creating a new workspace for your project. Define the API endpoints corresponding to the CRUD operations for categories, products, and tags. For each endpoint, configure the HTTP method, URL, headers, and request body as needed. Execute the requests to ensure that the API responds correctly, verifies data integrity, and handles various edge cases. 


## Questions

If you have any questions, please feel free to contact me at [demichele.charles@yahoo.com](mailto:demichele.charles@yahoo.com). You can also find more of my work at [demichele-c](https://github.com/demichele-c).

## License

This project is licensed under the MIT license. Click [here](https://opensource.org/licenses/MIT) for more details.
