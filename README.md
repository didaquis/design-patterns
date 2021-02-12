# design-patterns

Examples of some design patterns using TypeScript. 
https://www.youtube.com/watch?v=Yk5TXytE-gs&list=PL9prAn3zOWZ4slyDs5y7VOxhb_Sc04ShD

https://refactoring.guru/es/design-patterns

Patrones de diseño creacionales:  

* Singleton
* Abstract Factory
* Factory Method

Patrones de diseño estructurales:  

* Adapter
* Decorator
* Proxy

Patrones de comportamiento:  

* Command
* Observer
* Strategy

---------------  


### Requirements

Node.js 12 or higher


### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run lint`

This run the linter.

#### `npm run purgue`

Remove the folders: "build", "coverage" and "node_modules".

#### `npm run test`

Execute the test with coverage report.

#### `npm run test:watch`

Execute test using watch option.
