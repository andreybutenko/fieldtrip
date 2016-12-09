import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ConversationsList from '../components/ConversationsList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        ...Platform.select({
            ios: {
                marginTop: 44
            },
            android: {
                marginTop: 34
            }
        })
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
