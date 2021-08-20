import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import componentNavigator from './components/template/componentNavigator';
import detailView1 from './components/template/detailView1';
import detailView2 from './components/template/detailView2';
import adminListGuides from './components/tourist_guide/adminListGuides';
import addTouristGuide from './components/tourist_guide/addTouristGuide';

function App() {
  return (
    
    <Router>
      <Route path="/componentNavigator" component={componentNavigator}/>
      <Route path="/detailViewOne" component={detailView1}/>
      <Route path="/detailViewTwo" component={detailView2}/>
      <Route path="/adminListViewGuides" component={adminListGuides}/>
      <Route path="/adminAddGuide" component={addTouristGuide}/>
    </Router>

>>>>>>> Stashed changes
  );
}

export default App;
