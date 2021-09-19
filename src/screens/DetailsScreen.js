import React, { useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoDetailsItem from '../components/main/InfoDetailsItem';

import { useSelector, useDispatch } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

import Fonts from '../styles/Fonts';
import Colors from '../styles/Colors';
import { toggleFavorite } from '../store/actions/characters';

const DetailsScreen = (props) => {
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

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>{characterSelected.name}</Text>
                <View>
                    <Entypo.Button
                        {...props}
                        name={isFavorite ? 'heart' : 'heart-outlined'}
                        size={32}
                        backgroundColor='transparent'
                        color={isFavorite ? Colors.primary : 'white'}
                        onPress={toggleFavoriteHandler}
                    />
                </View>
            </View>
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
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        backgroundColor: Colors.black
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
        justifyContent: 'space-between'
    }
});
