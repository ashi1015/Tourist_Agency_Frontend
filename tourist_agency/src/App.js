import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import componentNavigator from './components/template/componentNavigator';
import detailView1 from './components/template/detailView1';
import detailView2 from './components/template/detailView2';

function App() {
  return (
    
    <Router>
      <Route path="/componentNavigator" component={componentNavigator}/>
      <Route path="/detailViewOne" component={detailView1}/>
      <Route path="/detailViewTwo" component={detailView2}/>
    </Router>

  );
}

export default App;
