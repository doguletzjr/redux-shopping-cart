import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.scss';
import App from './containers/App';
import reducers from './redux/reducers/reducers'

const Store = createStore(reducers);

render(
    <Provider store={Store}><App /></Provider>,
    document.getElementById('root')
)