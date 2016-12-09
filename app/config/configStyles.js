import { Platform, StyleSheet } from 'react-native';

const configStyles = StyleSheet.create({
    sceneWrapper: {
        ...Platform.select({
            ios: {
                flex: 1,
                marginTop: 64
            },
            android: {
                flex: 1,
                marginTop: 54
            }
        })
    }
});

export default configStyles;
