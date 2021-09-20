import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const { width } = Dimensions.get('screen');

const FavItem = (props) => {

    return (
        <View style={styles.item}>
            
            <Image
                style={styles.image}
                source={{ uri: props.imageUrl }}

            />
            <View style={styles.labelContainer}>
                <Text
                    style={styles.text}
                    numberOfLines={2}
                >
                    {props.name}
                </Text>
                <Text
                    style={styles.subtitle}
                >
                    {props.gender}
                </Text>
            </View>
        </View>
    );
};

export default FavItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        width: width * 0.70,
        backgroundColor: Colors.black,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },

    labelContainer: {
        marginLeft: 10
    },

    text: {
        color: 'white',
        fontFamily: Fonts.bold,
        fontSize: 16,
        textAlign: 'left',
    },

    image: {
        width: '30%',
        height: 75,
        borderRadius: 5
    },

    subtitle: {
        color: '#c0c0c0',
        fontFamily: Fonts.regular,
        fontSize: 14,
    },
});