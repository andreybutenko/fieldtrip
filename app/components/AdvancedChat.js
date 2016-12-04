import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import images from '../config/images';
import ConversationsRow from './ConversationsRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    contentcontainer: {
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    }
});

class AdvancedChat extends Component {
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

export default AdvancedChat;
