import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ApplicationState } from './store';
import configureStore from './configureStore';
import './App.css';
import logo from './logo.svg';

const history = createBrowserHistory();

const initialState: ApplicationState = {
  router: ({ location: history.location, action: 'PUSH' })
}

const store = configureStore(history, initialState)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
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

      </ConnectedRouter>
    </Provider>
  );
}

export default App;
