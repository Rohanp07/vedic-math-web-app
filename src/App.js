import './assets/App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutComponent from './components/AboutComponent';
import Learning from './components/Learning'
function App() {
  // const location = useLocation();
  return (
    <div className="App">
    <Router>
    <div className="content">
    <NavbarComponent/>
            <Switch >
                <Route exact path="/">
                  <HomeComponent />
                </Route>
                <Route path="/home">
                  <HomeComponent />
                </Route>
                <Route path="/about">
                  <AboutComponent />
                </Route>

                <Route path="/learn">
                  <Learning/>
                </Route>

            </Switch>
            
      
      </div>
     </Router>
    </div>
  );
}

export default App;
