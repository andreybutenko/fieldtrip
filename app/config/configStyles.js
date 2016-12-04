import { Platform, StyleSheet } from 'react-native';

const configStyles = StyleSheet.create({
    sceneWrapper: {
        ...Platform.select({
            ios: {
                marginTop: 64
            },
            android: {
                marginTop: 54
            }
        })
    }
});

export default configStyles;
