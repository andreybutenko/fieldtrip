import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

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

export default class ConversationHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 8, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    }
                },
                {
                    _id: 2,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 3,
                        name: 'A',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    }
                },
                {
                    _id: 3,
                    text: 'Hi!',
                    createdAt: new Date(Date.UTC(2016, 9, 30, 17, 20, 0)),
                    user: {
                        _id: 1,
                        name: 'Me',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    }
                }
            ]
        });
    }
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}
