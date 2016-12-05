import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

class ChatBubble extends Component {
    openConversationHistory(id) {
        Actions.conversationHistory({ id: id });
    }
    render() {
        return (
            <View style={[styles.container, { alignSelf: this.props.fromMe ? 'flex-end' : 'flex-start' }]}>
                <Text>HEYEO{ this.props.text }</Text>
            </View>
        );
    }
}

export default ChatBubble;
