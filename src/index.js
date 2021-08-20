import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import {BrowserRouter} from "react-router-dom";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     store={store}
                     dispatch={store.dispatch.bind(store)}
                     // bind.store - чтобы владелец метода сохранился, сложности с контекстом вызова this
                     />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderEntireTree(store.getState());

window.store = store.getState();

// store.subscribe(()=> {
//     let state = store.getState();
//     reRenderEntireTree(state)
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
