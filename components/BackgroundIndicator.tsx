import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    status: 'correct' | 'incorrect' | 'none';
};

export const BackgroundIndicator = ({ status }: Props) => {
    const getBackgroundColor = () => {
        switch (status) {
            case 'correct': return '#4caf50'; // Green
            case 'incorrect': return '#f44336'; // Red
            default: return '#e0e0e0'; // Grey
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: getBackgroundColor() }]} />
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
});
