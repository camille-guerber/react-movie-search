import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import  { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import './css/index.css'
import './css/bootstrap.min.css'

import Header from './components/header'
import Footer from './components/footer'
import App from '../src/containers/App'
import Movie from '../src/containers/Movie'
import ShowMovie from '../src/containers/ShowMovie'
import NotFound from '../src/containers/NotFound'
import { store } from './store'



const Rooter = (
    <div className="container-fluid">
        <Provider store={store}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/movie" component={Movie} />
                    <Route exact path="/movie/:id" component={ShowMovie} />
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </Router>
        </Provider>
    </div>
)

ReactDOM.render(Rooter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
