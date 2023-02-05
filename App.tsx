import * as React from 'react';

import store from './src/store';
import { Provider } from 'react-redux';

import Router from './src/router';

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default App;
