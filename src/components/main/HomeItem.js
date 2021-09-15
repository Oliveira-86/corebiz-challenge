import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Fonts from '../../styles/Fonts';

const { width } = Dimensions.get('screen');

const HomeItem = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onSelected}
        >
            <View style={styles.item}>
                <Text
                    style={styles.text}
                    numberOfLines={2}
                >{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HomeItem;

const styles = StyleSheet.create({
    item: {
        width: width * 0.42,
        margin: 10,
        backgroundColor: "rgba(0,0,0, 0.2)",
        padding: 10,
        justifyContent: 'center',
        borderRadius: 5
    },

    text: {
        color: 'white',
        fontFamily: Fonts.bold,
        fontSize: 18,
        textAlign: 'left'
    }
});