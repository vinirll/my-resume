# My Resume as React Web App

##### steps to use:

- Install my application dependencies
```sh
$ npm install
```

- Install a lightweight web server
```sh
$ npm install http-server -g
```

- Install Browserify (From docs: lets you require('modules') in the browser by bundling up all of your dependencies)
```sh
$ npm install -g browserify
```

- To build (browserify) and serve the web app using http-server, use the following command:
```sh
browserify -t [ babelify --presets [ react ] ] scripts/app.js -o build/app.js && http-server
```
