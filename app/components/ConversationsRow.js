import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row'
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    content: {
        flex: 1,
        marginLeft: 12
    },
    contentTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: '#000'
    },
    date: {
        fontSize: 10
    },
    contentBottom: {
        flexDirection: 'row'
    },
    subtitle: {
        color: '#444',
        flexShrink: 0
    },
    text: {
        flexShrink: 1,
        fontSize: 12
    }
});

class ConversationsRow extends Component {
    openConversationHistory(id) {
        Actions.conversationHistory({ id: id });
    }
    render() {
        return (
            <TouchableHighlight underlayColor={'#ccc'} onPress={() => this.openConversationHistory(this.props.id)}>
                <View style={styles.container}>
                    <Image source={this.props.photo} style={styles.photo} />
                    <View style={styles.content}>
                        <View style={styles.contentTop}>
                            <Text style={styles.title} numberOfLines={1} elipsizeMode={'tail'}>
                                {`${this.props.title}`}
                            </Text>
                            <Text style={styles.date}>
                                {`${this.props.date}`}
                            </Text>
                        </View>
                        <View style={styles.contentBottom}>
                            <Text style={[styles.text, styles.subtitle]} numberOfLines={1} elipsizeMode={'clip'}>
                                {typeof this.props.sub != 'undefined' ? `${this.props.sub}: ` : ''}
                            </Text>
                            <Text style={styles.text} numberOfLines={1} elipsizeMode={'tail'}>
                                {`${this.props.text}`}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default ConversationsRow;
