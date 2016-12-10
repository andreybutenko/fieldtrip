import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConversationsRow from './ConversationsRow';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0
    },
    input: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6,
        marginLeft: 8
    },
    icon: {
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 20
    }
});

class TextChat extends Component {
    changeSection() {

    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={'Write a message'}
                    multiline={true}
                    onFocus={() => this.props.enableSection(0)}
                    onBlur={() => this.props.enableSection(-1, 0)}
                />
                <Icon style={styles.icon} onPress={() => this.changeSection()} name="send" />
            </View>
        );
    }
}

export default TextChat;
