import React, { useCallback, useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Image } from 'react-native';
import InfoDetailsItem from '../components/main/InfoDetailsItem';

import { useSelector, useDispatch } from 'react-redux';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import Fonts from '../styles/Fonts';
import Colors from '../styles/Colors';
import { toggleFavorite } from '../store/actions/characters';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailsScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const characterId = props.route.params.characterId;
    const isFavorite = useSelector(state =>
        state.characters.favoriteCharacter.some(char => char.created === characterId)
    );

    const characters = useSelector(state => state.characters.availableCharacters);

    const dispatch = useDispatch();

    const characterSelected = characters.find(
        charater => charater.created === characterId
    );

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(characterSelected.created));
    }, [dispatch, characterSelected]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: characterSelected.image }}
                style={styles.image}
            />
            <View style={{ flex: 1, left: -50 }}>
                <InfoDetailsItem
                    dataLeft={characterSelected.gender}
                    labelLeft="gender"
                    dataRight={characterSelected.birth_year}
                    labelRight="birth year"
                />
                <InfoDetailsItem
                    dataLeft={characterSelected.height}
                    labelLeft="height"
                    dataRight={characterSelected.mass}
                    labelRight="mass"
                />
            </View>
            <View style={styles.favIcon}>
                <Entypo.Button
                    {...props}
                    name={isFavorite ? 'heart' : 'heart-outlined'}
                    size={40}
                    backgroundColor='transparent'
                    color={isFavorite ? Colors.primary : Colors.primary}
                    onPress={toggleFavoriteHandler}

                />
            </View>
        </View>
    );
};

export const screenOptions = (navData) => {
    return {
        title: navData.route.params.name,
        headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
        },
        headerTitleStyle: {
            color: 'white',
            fontFamily: Fonts.bold
        },
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navData.navigation.goBack()}
            >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={36}
                    color="white"
                    style={{ marginLeft: 10 }}
                />
            </TouchableOpacity>
        )
    }
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        backgroundColor: Colors.black,
        alignItems: 'center',

    },

    text: {
        color: 'white',
        fontFamily: Fonts.bold,
        fontSize: 28,
        textAlign: 'left'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },

    favIcon: {
        position: 'absolute',
        top: 255,
        right: 40
    },

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black
    },
});
