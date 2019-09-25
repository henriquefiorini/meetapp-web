import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import { store, persistor } from './store';
import { history } from './services';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <p>Hello World!</p>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
