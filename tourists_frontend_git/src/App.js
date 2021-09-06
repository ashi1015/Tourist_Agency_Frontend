import './App.css';
import NavBar from './components/navBar/navBar';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateExpenses from './components/Expenses/CreateExpenses';
import CreateTourists from './components/Tourists/CreateTourists';
import Login from './components/Login/Login';
import ViewTourists from './components/Tourists/ViewTouristsProfile';
import Expenses from './components/Expenses/ViewExpenses';



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <section>
          <Switch>
            <Route path="/create-tourist" component={CreateTourists}/>
            <Route path="/create-expenses" component={CreateExpenses}/>
            <Route path="/login" component={Login}/>
            <Route path="/Profile" component={ViewTourists}/>
            <Route path="/expenses" component={Expenses}/>
            
        </Switch>
      </section>
      </Router>
    </div>
  );
}

export default App;
