import React from "react";
import ReactDom from 'react-dom'
import { Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './Components/App'
import ErrorBoudry from "./Components/ErrorBoudry/ErrorBoudry";
import BookStore from "./Services/bookstors";
import { BookStoreServiceProvider } from "./Components/BookStoreContext/BookStoreContext";

import store from "./Components/Redux/store";

const bookStoreService = new BookStore()


ReactDom.render(
    <Provider store={store}>
        <ErrorBoudry>
            <BookStoreServiceProvider value={ bookStoreService }>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoudry>
    </Provider>,
    document.getElementById('root'))


























// const App = () => {
//     return (
//         <div>
//            <Context/>
//         </div>
//     )
// }
//
// ReactDOM.render(<App />,  document.getElementById('root'));


