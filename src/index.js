import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {setImages, startSetImages} from './actions/imagesActions'

const store = configureStore()

store.subscribe( () => {
    console.log(store.getState())
})

if(JSON.parse(localStorage.getItem('images'))){
    store.dispatch(setImages(JSON.parse(localStorage.getItem('images'))))
} else {
    store.dispatch(startSetImages()())
}
console.log(store.getState())

const jsx = (
    <Provider store = {store} >
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

