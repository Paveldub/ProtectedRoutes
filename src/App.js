import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ProtectedRoutes } from '../src/ProtectedRoutes/ProtectedRoutes';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { Account } from './Pages/Account';
import { Cards } from './Pages/Cards';
import { Home } from './Pages/Home';

function App() {
  const [isAuth, login, logout] = useAuth(false);

  return (
    <div className="App">
      <h1>React private routes</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/accounts">Account page (Protected)</Link>
          </li>
          <li>
            <Link to="/cards">Cards page (Unprotected)</Link>
          </li>
          {isAuth ? 
            (<>
              <div>You are logged in</div>
                <button onClick={logout}>log out</button>
              </>) 
            : 
            (<>
              <div>You are logged out</div>
              <button onClick={login}>Log in</button>
            </>
            )
            }
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cards" component={Cards} />
          <ProtectedRoutes path="/accounts" component={Account} auth={isAuth}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
