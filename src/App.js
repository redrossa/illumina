import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import background from "./images/app-background.svg"

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar>
              <NavItem activeClassName='active' exact to='/' position='left'>Home</NavItem>
              <NavItem activeClassName='active' to='/about' position='right'>About</NavItem>
            </Navbar>
            <div className='content'>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/about' component={AboutPage}/>
              </Switch>
            </div>
            <div className='background-container'>
              <img className='background' src={background}/>
            </div>
          </header>
        </div>
      </Router>
  );
}

export default App;
