# NextJS Boilerplate

An opinionated boilerplate to kickstart projects using NextJS

**Features**

- 🌊 Custom server, Document and App
- ⌨️ Type safety using TypeScript in strict mode
- 💄 Write future CSS with PostCSS + preset-env
- 🖊 SVG sprite for icons
- 👀 Lint your code with TSLint & Stylelint
- 🌈 Prettier for consistent code style
- 🔨 Jest + Enzyme for tests
- ☝️ Husy + lint-staged for code quality assurance
- ⚙️ Editorconfig file for consistent indents
- 🗄 Redux with `react-redux` and `redux-thunk`

## Getting started

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have Node and NPM installed and run:

```sh
$ npm install
```

**Development**
Once all dependencies have been installed you can start development. To start the development server run:

```sh
$ npm run dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000)

**Production**
To run your application in production make sure to run a build first:

```sh
$ npm run buil
```

And then start you application with a provided port number:

```sh
$ PORT=8080 npm run start
```

**Linters**
The boilerplate provides a couple of linters to help you keep an eye on code consistency and type safety. There are three linters: one for CSS, one for TypeScript and one for type safety. You can use each of them separately using the following commands:

```sh
$ npm run lint:css
$ npm run lint:ts
$ npm run lint:types
```

TIP: To get the most out of your linters install the corresponding (Stylelint, TSLint) plugins for your editor or IDE

**Prettier**
Prettier helps you to enforce consistent (opinionated) code style. If possible, you can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ npm run prettier
```

**Tests**
You can write your tests using Jest and Enzyme. You can run all test with the following command

```sh
$ npm run test
```
If you want to follow test driven development you can use:

```sh
$ npm run test:dev
```