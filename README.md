# Shopping Cart

This is a shopping cart application built with Vite, React, Context, and following a clean architecture approach.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/JuanSebastianGB/shopping-cart.git
cd shopping-cart
```

## Usage

1.  Start the development server:

`pnpm dev`

This command will start the Vite development server and open the application in your default browser.

2.  Explore the application and add products to the shopping cart.

## Architecture

The project follows a clean architecture approach, which separates the application into different layers:

- **Presentation Layer**: Contains the user interface components and handles the rendering logic using React.
- **Domain Layer**: Represents the core business logic of the application, independent of any external frameworks or libraries. It includes entities, use cases, and interfaces defining the application's behavior.
- **Data Layer**: Handles data persistence and communication with external services or APIs. It implements the interfaces defined in the domain layer and provides concrete implementations.
- **Infrastructure Layer**: Provides additional infrastructure-related functionalities, such as configuration, logging, and third-party libraries integration.

## Contributing

Contributions to the project are welcome! If you would like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch:

`git checkout -b feature/your-feature-name`

3.  Make your changes and commit them.
4.  Push the changes to your forked repository:

`git push origin feature/your-feature-name`

5.  Open a pull request in the original repository.

## License

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
