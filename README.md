<h1 align="center">Template</h1>

<p align="center"> This repository houses a custom template that incorporates React, Node, Webpack, Babel, TypeScript, SASS/SCSS, ESLint and Prettier. </p>  

## Description

- React: JavaScript library for building user interfaces
- Node: Asynchronous event-driven JavaScript runtime
- Webpack: Module bundler
- Babel: Transpiler
- TypeScript: Superset of JavaScript with static typing
- SASS/SCSS: Pre-processor scripting language for CSS, and its corresponding syntax 
- ESLint: Static code analysis tool
- Prettier: Code formatter

## Status

<p align="center"> <img src="https://img.shields.io/github/languages/count/droman892/typed-searcher" /> </p>

<p align="center"> <img src="https://img.shields.io/github/repo-size/droman892/typed-searcher" /> </p>

## Download and Installation

- Clone the repo: `git clone https://github.com/droman892/template.git` 
## Usage

After the project files are downloaded, in the terminal, in the root folder, run `npm run start` to install the dependencies and dev-dependencies.  The Webpack Dev Server will make the application available on the browser, opening it up on `localhost:1111`.

Feel free to edit anything in the `src` folder to flesh out your application.  Use the scripts `npm run lint` to manually run ESLint, and   `npm run format` to manually run Prettier.

When you're ready to deploy your application, run `npm run build`.  A `build` folder will be dynamically generated containing all of the bundled, minified code within the `src` folder.  You'll notice that running this command also opens up the Webpack Bundle Analyzer view on your browser; this interface lets you easily see the size of your production files.

When you want to push updates to your online repository, upon running your commands to commit your updates, you'll notice that Husky will run the pre-commit command to execute both ESLint and Prettier before finalizing the commit.

## Roadmap

This template is an on-going project, open to contributions and critique.  Functionality that would appropriately flesh out the application include the following:
1) testing capability
2) backend server
3) database access

## Bugs and Issues

See a bug or an issue with this project? [Open a new issue](https://github.com/droman892/template/issues) here on GitHub.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## About

This full-stack search application is maintained by [David Roman](https://www.linkedin.com/in/david-roman-front-end-engineer/).

## License

[MIT](https://choosealicense.com/licenses/mit/)