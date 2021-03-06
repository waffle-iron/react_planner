import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ChooseMyMeal from './components/ChooseMyMeal';
import CookMyMeal from './components/CookMyMeal';
import Profile from './components/Profile';
import GroceryList from './components/GroceryList';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(

    <Router>
        <App>
            <Route path="/homepage" component={HomePage} />
            <Route path="/choosemymeal" component={ChooseMyMeal} />
            <Route path="/cookmymeal" component={CookMyMeal} />
            <Route path="/profile" component={Profile} />
            <Route path="/grocerylist" component={GroceryList} />
        </App>
    </Router>
    ,
    document.getElementById('root'));
registerServiceWorker();
