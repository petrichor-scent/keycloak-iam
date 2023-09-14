import logo from './logo.svg';
import './App.css';
import {login, logout} from "./Keycloak";

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

          <button type="submit" onClick={login}>
            Login
          </button>

          <button onClick={logout}>
            Logout
          </button>

        </header>
      </div>
  );
}

export default App;
