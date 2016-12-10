import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConversationsRow from './ConversationsRow';

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    icon: {
        fontSize: 20,
        paddingTop: 5,
        flex: 1,
        textAlign: 'center'
    }
});

export default class AdvancedChat extends Component {
    constructor() {
        super();
        this.state = {
            icons: ['comment', 'add-a-photo', 'add-location', 'beenhere']
        }
    }
    render() {
        return (
            <View style={styles.container}>
            {this.state.icons.map((icon, i) =>
                <Icon
                    key={i}
                    style={[styles.icon, { color: this.props.enabledSection != i ? null : '#19b5fe' }]}
                    onPress={() => this.props.enableSection(i)}
                    name={icon}
                />
            )}
            </View>
        );
    }
}
