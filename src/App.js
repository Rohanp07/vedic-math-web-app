import './assets/App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './pages/HomeComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutComponent from './pages/AboutComponent';
import Learning from './pages/Learning'
import Practice from './pages/Practice'
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
                
                <Route path="/practice">
                  <Practice/>
                </Route>

            </Switch>
            
      
      </div>
     </Router>
    </div>
  );
}

export default App;
