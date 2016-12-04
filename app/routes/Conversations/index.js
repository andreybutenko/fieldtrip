import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import ConversationsList from '../../components/ConversationsList';

export default class Conversations extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ConversationsList></ConversationsList>
            </View>
        );
    }
}

/*
<Text style={styles.welcome}>
    Welcome to React Native!
</Text>
<Text style={styles.instructions}>
    To get started, edit index.ios.js
</Text>
<Text style={styles.instructions}>
    Press Cmd+R to reload,{'\n'}
    Cmd+D or shake for dev menu
</Text>*/
