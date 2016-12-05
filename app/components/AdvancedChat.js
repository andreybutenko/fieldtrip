import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConversationsRow from './ConversationsRow';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    icon: {
        fontSize: 20
    }
});

class AdvancedChat extends Component {
    changeSection() {
        this.props.resizeCallback(50);
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon style={styles.icon} onPress={() => this.changeSection()} name="comment" />
                <Icon style={styles.icon} onPress={() => this.changeSection()} name="add-a-photo" />
                <Icon style={styles.icon} onPress={() => this.changeSection()} name="add-location" />
                <Icon style={styles.icon} onPress={() => this.changeSection()} name="beenhere" />
            </View>
        );
    }
}

export default AdvancedChat;
