import ReactDOM from "react-dom"
import React from "react"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './components/App'

// TODO - remake this
// let config = {
//     apiKey: "AIzaSyBA5hfx5ydTPZzGDypT7kc7rUFmSmBH1QA",
//     authDomain: "resume.js-viewer.firebaseapp.com",
//     databaseURL: "https://education.js-viewer.firebaseio.com",
//     storageBucket: "",
// };
// firebase.initializeApp(config);

let entryTag = document.createElement('div');
entryTag.setAttribute('id', 'app');
document.body.appendChild(entryTag);

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);