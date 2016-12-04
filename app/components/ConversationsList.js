import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import images from '../config/images';
import configStyles from '../config/configStyles';
import ConversationsRow from './ConversationsRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    contentcontainer: {
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    }
});

class ConversationsList extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    title: 'Chaperone Group',
                    sub: 'Andrey Butenko',
                    date: '15 min',
                    text: 'Hello, World!',
                    photo: images.profilePlaceholder,
                    id: 0
                },
                {
                    title: 'Andrey Butenko',
                    date: 'yesterday',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia enim sed lorem porttitor tincidunt. Morbi sed diam quis ipsum bibendum congue vitae at ligula. Quisque in mauris pretium, laoreet elit a, commodo dolor. Cras iaculis arcu at libero consectetur, feugiat imperdiet urna facilisis. Sed eu porttitor augue, sed rutrum eros. Aliquam porttitor, magna vel egestas lobortis, leo enim vulputate nibh, sit amet elementum risus velit sed leo. Nullam id aliquam purus. Sed scelerisque porttitor ultrices. Curabitur nulla libero, tempus at efficitur id, venenatis ultrices diam. Maecenas quis pharetra velit, ut consectetur diam.',
                    photo: images.profilePlaceholder,
                    id: 1
                },
                {
                    title: 'Andrey Butenko',
                    date: '11/14/16',
                    text: 'Hello, World!',
                    photo: images.profilePlaceholder,
                    id: 2
                }
            ])
        };
    }
    render() {
        return (
            <ListView
                style={[styles.container, configStyles.sceneWrapper]}
                contentContainerStyle={styles.contentcontainer}
                dataSource={this.state.dataSource}
                renderRow={(data) => <ConversationsRow {...data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        );
    }
}

export default ConversationsList;
