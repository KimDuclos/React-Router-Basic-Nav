import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Route} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


ReactDOM.render(
    <Router>
      <div>
        <App />
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </Router>,
    document.getElementById('root'));


