import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, Image, ActivityIndicator } from 'react-native';
import images from '../assets/images';
import HomeItem from '../components/main/HomeItem';

import Logo from '../assets/star-wars-logo.png';

import { useSelector, useDispatch } from 'react-redux';
import * as charactersActions from '../store/actions/characters';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';

const { width, height } = Dimensions.get('screen');

const bgImage = images.homeBg;

const HomeScreen = (props) => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const characters = useSelector(state => state.characters.availableCharacters);

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
        setIsLoading(true);
        loadCharacters().then(() => {
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        )
    };

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
                imageUrl={itemData.item.image}
                onSelected={() => {
                    props.navigation.navigate('Details', {
                        characterId: itemData.item.created,
                        name: itemData.item.name
                    })
                }}
            />
        );
    };


    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={characters}
                renderItem={renderGridItem}
                keyExtractor={(item) => item.height}
                ListHeaderComponent={() => (
                    <View style={[{ paddingHorizontal: 10, paddingTop: 40 }]}>
                        <Image
                            style={styles.logo}
                            source={Logo}
                        />
                        <Text style={styles.title}>
                            Characters
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        backgroundColor: Colors.black
    },

    title: {
        fontFamily: Fonts.bold,
        fontSize: 24,
        color: 'white',
        marginTop: 20
    },

    logo: {
        width: 150,
        height: 70
    },

    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black
    },
});
