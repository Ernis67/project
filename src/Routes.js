import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Lenta from './Components/Lenta/Lenta';
import LentaList from './Components/LenteList/LentaList';
import TopicContextProvider from './Context/TopicContext';
import Header from './Components/Header/Header'

const Router = () => {
    return (
        <div>
            <TopicContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/lenta" component={Lenta} />
                        <Route exact path="/lentaList" component={LentaList} />
                    </Switch>
                </BrowserRouter>
            </TopicContextProvider>
        </div>
    );
};

export default Router;