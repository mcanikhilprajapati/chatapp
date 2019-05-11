import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from './app/store'
import Navigation from './app/Navigation'
global.isdoctor=true;
const store = configureStore();

const App = () =>
    <Provider store={store}>
        <Navigation/>
    </Provider>

export default App


