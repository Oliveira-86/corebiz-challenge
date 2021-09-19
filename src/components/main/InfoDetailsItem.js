import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fonts from '../../styles/Fonts';

const InfoDetailsItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text
                    style={styles.dataText}
                >
                  {props.dataLeft}
                </Text>
                <Text
                    style={[styles.dataText, { left: 50 }]}
                >
                    {props.dataRight}
                </Text>
            </View>
            <View style={styles.row}>
                <Text
                    style={styles.label}
                >
                  {props.labelLeft}
                </Text>
                <Text
                    style={[styles.label, { left: 50 }]}
                >
                    {props.labelRight}
                </Text>
            </View>
        </View>
    )
}

export default InfoDetailsItem;

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },

    dataText: {
        color: 'white',
        fontFamily: Fonts.bold,
        fontSize: 18,
        textAlign: 'left'
    },

    label: {
        color: 'white',
        fontFamily: Fonts.regular,
        fontSize: 14,
        textAlign: 'left'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
