import './assets/App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './pages/HomeComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutComponent from './pages/AboutComponent';
import Learning from './pages/Learning';
import Practice from './pages/Practice';
import Login from './pages/Login';
import Register from './pages/Register';
import info from './assets/info';
import q1 from './assets/q1';
import q2 from './assets/q2';
import q3 from './assets/q3';



function App() {
  // const location = useLocation();
  // const information=info;
  // console.log(info[0].videoLink)
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
                  <HomeComponent/>
                </Route> 
                <Route path="/about">
                  <AboutComponent />
                </Route>

                <Route path="/learnNikhilam">
                  <Learning info={info[0]}/>
                </Route>
                
                <Route path="/learnEka">
                  <Learning info={info[1]}/>
                </Route>

                <Route path="/learnAntya">
                  <Learning info={info[2]}/>
                </Route>
                <Route path="/practiceN">
                  <Practice questions={q1}/>
                </Route>

                <Route path="/practiceE">
                  <Practice questions={q2}/>
                </Route>

                <Route path="/practiceA">
                  <Practice questions={q3}/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/register">
                    <Register/>
                </Route>

            </Switch>
            
      
      </div>
     </Router>
    </div>
  );
}

export default App;
