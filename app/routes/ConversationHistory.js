import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import configStyles from '../config/configStyles';
import AdvancedChat from '../components/AdvancedChat';
import ChatBubble from '../components/ChatBubble';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chat: {
        flex: 1
    }
});

export default class ConversationHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            messages: [
            ]
        });
    }
    render() {
        return (
            <View style={[styles.container, configStyles.sceneWrapper]}>
                <View style={styles.chat}>
                    <ChatBubble
                        fromMe={false}
                        sender={'Andrey Butenko'}
                        text={'Diam veri has ne, te eum iusto persecuti, vivendo partiendo ne usu. Ex per modus graece, duo omnesque accusamus imperdiet no. An vel alia choro, et accusamus contentiones mei, duo ne omnes oratio pericula. Deleniti nominati vix cu. An sea percipit mnesarchum dissentiunt, velit simul indoctum ei ius, id diceret eleifend qui. Ne nam omnis vidisse delicata.'}
                    />
                    <ChatBubble
                        fromMe={true}
                        sender={'Andrey Butenko'}
                        text={'Hello!'}
                    />
                </View>
                <AdvancedChat />
            </View>
        );
    }
}
