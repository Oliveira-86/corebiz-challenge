import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Fonts from '../../styles/Fonts';

const { width } = Dimensions.get('screen');

const HomeItem = (props) => {

    return (
        <TouchableOpacity
            onPress={props.onSelected}

        >
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={{ uri: props.imageUrl }}

                />
                <Text
                    style={styles.text}
                    numberOfLines={2}
                >
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HomeItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        width: width * 0.42,
        margin: 10,
        backgroundColor: "rgba(250,250,250, 0.08)",
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',

    },

    text: {
        color: 'white',
        fontFamily: Fonts.bold,
        fontSize: 14,
        textAlign: 'left',
        width: '60%',
        marginLeft: 5
    },

    image: {
        width: '30%',
        height: 65,
        borderRadius: 5
    },

    subtitle: {
        color: '#c0c0c0',
        fontFamily: Fonts.regular,
        fontSize: 12,
        marginLeft: 5
    }
});