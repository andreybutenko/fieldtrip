import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const Row = (props) => (
    <View style={styles.container}>
        <Image source={props.photo} style={styles.photo} />
        <View style={styles.content}>
            <View style={styles.contentTop}>
                <Text style={styles.title} numberOfLines={1} elipsizeMode={'tail'}>
                    {`${props.title}`}
                </Text>
                <Text style={styles.date}>
                    {`${props.date}`}
                </Text>
            </View>
            <View style={styles.contentBottom}>
                <Text style={[styles.text, styles.subtitle]} numberOfLines={1} elipsizeMode={'clip'}>
                    {typeof props.sub != 'undefined' ? `${props.sub}: ` : ''}
                </Text>
                <Text style={styles.text} numberOfLines={1} elipsizeMode={'tail'}>
                    {`${props.text}`}
                </Text>
            </View>
        </View>
    </View>
);

export default Row;
