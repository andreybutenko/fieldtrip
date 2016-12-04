import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConversationsList from '../components/ConversationsList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default class Conversations extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ConversationsList />
            </View>
        );
    }
}