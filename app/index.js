import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import configureStore from './store/configure-store.js';
import Conversations from './routes/Conversations';

const store = configureStore();

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
}

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#999999' }}>
                            <Scene key="conversationstab" title="Conversations" icon={TabIcon}>
                                <Scene key="conversations" title="Conversations" component={Conversations} initial={true} />
                            </Scene>
                        </Scene>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
