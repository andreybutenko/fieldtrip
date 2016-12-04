import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import ConversationsRow from '../ConversationsRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    }
});

class ConversationsList extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{text: 'Hello, World!'}, {text: 'Hey, Globe!'}, {text: 'Howdy, All!'}]),
        };
    }
    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <ConversationsRow {...data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        );
    }
}

export default ConversationsList;
