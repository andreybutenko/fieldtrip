import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import configStyles from '../config/configStyles';
import AdvancedChat from '../components/AdvancedChat';
import ChatBubble from '../components/ChatBubble';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chat: {
        flex: 1,
        marginBottom: 8
    },
    textChat: {
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

export default class ConversationHistory extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.initialScrollDone = false;
        this.setState({
            enabledSection: -1,
            typing: '',
            messages: [
                {
                    sender: 'Andrey Butenko',
                    text: 'Diam veri has ne, te eum iusto persecuti, vivendo partiendo ne usu.'
                },
                {
                    sender: 'Barack Obama',
                    text: 'Ex per modus graece, duo omnesque accusamus imperdiet no. An vel alia choro, et accusamus contentiones mei, duo ne omnes oratio pericula. Deleniti nominati vix cu. An sea percipit mnesarchum dissentiunt, velit simul indoctum ei ius, id diceret eleifend qui. Ne nam omnis vidisse delicata.'
                },
                {
                    sender: 'Barack Obama',
                    text: 'An vel alia choro, et accusamus contentiones mei, duo ne omnes oratio pericula. Deleniti nominati vix cu. An sea percipit mnesarchum dissentiunt, velit simul indoctum ei ius, id diceret eleifend qui. Ne nam omnis vidisse delicata.'
                },
                {
                    sender: 'Andrey Butenko',
                    text: 'Deleniti nominati vix cu. An sea percipit mnesarchum dissentiunt, velit simul indoctum ei ius, id diceret eleifend qui. Ne nam omnis vidisse delicata.'
                },
                {
                    sender: 'Andrey Butenko',
                    text: 'Ne nam omnis vidisse delicata.'
                }
            ]
        });
    }
    scrollResize(height) {
        this.scrollView.scrollTo({ y: height, animated: this.initialScrollDone });
        this.initialScrollDone = true;
    }
    enableSection(i, curr) {
        // Can just pass i to set a section
        // If passing -1, should also pass curr to make sure you're not overwriting an already-opened section
        if(curr == null || this.state.enabledSection == curr) {
            this.setState({
                ...this.state,
                enabledSection: i
            });
        }

        if(i == 0) {
            this.textInput.focus();
        }
    }
    sendMessage(data) {
        if(data.type == 'text') {
            if(data.content != null && data.content != '') {
                this.setState({
                    ...this.state,
                    messages: [
                        ...this.state.messages,
                        {
                            sender: 'Andrey Butenko',
                            text: data.content
                        }
                    ]
                });
                this.textInput.clear(0);
            }
        }
    }
    render() {
        return (
            <View style={[styles.container, configStyles.sceneWrapper]}>
                <ScrollView style={styles.chat} ref={(scrollView) => { this.scrollView = scrollView; }} onContentSizeChange={(width, height) => { this.scrollResize(height); }}>
                    {this.state.messages.map((msg, i) =>
                        <ChatBubble
                            key={i}
                            fromMe={msg.sender == 'Andrey Butenko'}
                            sender={msg.sender}
                            text={msg.text}
                        />
                    )}
                </ScrollView>
                <AdvancedChat
                    enabledSection={this.state.enabledSection}
                    sendMessage={(data) => this.sendMessage(data)}
                    enableSection={(i) => this.enableSection(i)}
                />
                <View style={styles.textChat}>
                    <TextInput
                        ref={(textInput) => { this.textInput = textInput; }}
                        style={styles.input}
                        placeholder={'Write a message'}
                        multiline={true}
                        onChangeText={(val) => this.setState({
                            ...this.state,
                            typing: val
                        })}
                        onFocus={() => this.enableSection(0)}
                        onBlur={() => this.enableSection(-1, 0)}
                    />
                    <Icon
                        style={styles.icon}
                        name="send"
                        onPress={() => this.sendMessage({
                            type: 'text',
                            content: this.state.typing
                        })} />
                </View>
            </View>
        );
    }
}
