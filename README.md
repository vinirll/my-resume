use: npm install http-server -g
npm install -g browserify
npm install --save babelify babel-preset-react
browserify -t [ babelify --presets [ react ] ] scripts/app.js -o build/app.js && http-server
