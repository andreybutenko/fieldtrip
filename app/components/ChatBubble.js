import React, { Component } from 'react';
import { Dimensions, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import renderIf from '../lib/renderIf';

const styles = StyleSheet.create({
    container: {
        margin: 8,
        marginBottom: 0,
        flexDirection: 'column'
    },
    label: {
        marginBottom: 2
    },
    bubble: {
        padding: 8,
        borderRadius: 8
    },
    bubbleText: {
        
    }
});

class ChatBubble extends Component {
    render() {
        return (
            <View style={[
                styles.container, {
                    alignSelf: this.props.fromMe ? 'flex-end' : 'flex-start',
                    maxWidth: 0.8 * Dimensions.get('window').width
                }]
            }>
                {renderIf(!this.props.fromMe)(
                    <Text style={styles.label}>{ this.props.sender }</Text>
                )}
                <View style={[styles.bubble, { backgroundColor: this.props.fromMe ? '#eeeeee' : '#81cfe0' }]}>
                    <Text style={styles.bubbleText}>{ this.props.text }</Text>
                </View>
            </View>
        );
    }
}

export default ChatBubble;
