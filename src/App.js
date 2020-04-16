import React from 'react';
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/Content/Content";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <div className="font-size">
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <Content/>
                <Footer/>
            </Provider>
        </BrowserRouter>
        </div>
    );
}

export default App;
