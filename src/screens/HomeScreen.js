import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import images from '../assets/images';
import HomeItem from '../components/main/HomeItem';

import { useSelector, useDispatch } from 'react-redux';
import * as charactersActions from '../store/actions/characters';
import Colors from '../styles/Colors';

const { width, height } = Dimensions.get('screen');

const bgImage = images.homeBg;

const HomeScreen = (props) => {
    const [error, setError] = useState();

    const characters = useSelector(state => state.characters.availableCharacters);
    const favoriteCharacters = useSelector(state => state.characters.favoriteCharacter);

    const dispatch = useDispatch();

    const loadCharacters = useCallback(
        async () => {
            try {
                await dispatch(charactersActions.fetchCharacters());
            } catch (err) {
                setError(err)
            }
        },
        [dispatch, setError],
    )

    useEffect(() => {
        loadCharacters();
    }, []);

    
    

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={{ marginBottom: 10 }}>An error occurred!</Text>
                <Button
                    title="Try Again"
                    onPress={loadCharacters}
                    color={Colors.primary}
                />
            </View>
        )
    };

    const renderGridItem = (itemData) => {
        return (
            <HomeItem
                name={itemData.item.name}
                onSelected={() => {
                    props.navigation.navigate('Details', {
                        characterId: itemData.item.created
                    })
                }}
            />
        );
    };


    return (
        <ImageBackground
            source={{ uri: bgImage }}
            style={{ width, height }}
        >
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={characters}
                    renderItem={renderGridItem}
                    keyExtractor={(item) => item.height}
                />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;

// export const screenOptions = () => {
//     return {

//     }
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        backgroundColor: 'rgba(0,0,0, 0.8)'
    },
});
