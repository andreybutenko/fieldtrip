import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import configureStore from './store/configure-store.js';
import Conversations from './routes/Conversations';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="conversations" component={Conversations} title="Conversations" initial={true} />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
