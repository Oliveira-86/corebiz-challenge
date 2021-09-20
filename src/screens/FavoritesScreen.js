import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import FavItem from '../components/main/FavItem';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';

const FavoritesScreen = () => {
    const favCharacters = useSelector(state => state.characters.favoriteCharacter);

    if (favCharacters.length === 0 || !favCharacters) {
        return (
            <View style={styles.content}>
                <Text style={{ color: 'white' }}>
                    No favorite characters found. Start adding some!
                </Text>
            </View>
        );
    };

    const renderGridItem = (itemData) => {
        return (
            <FavItem
                name={itemData.item.name}
                imageUrl={itemData.item.image}
                gender={itemData.item.gender}
            />
        );
    };

    return (

        <View style={styles.content}>
                <FlatList
                    data={favCharacters}
                    keyExtractor={(item) => item.created}
                    renderItem={renderGridItem}
                    ListHeaderComponent={() => (
                        <View style={styles.headerContainer}>
                            <Image
                                source={{ uri: 'https://github.com/Oliveira-86.png' }}
                                style={{ width: 50, height: 50, borderRadius: 25 }}
                            />
                            <Text style={styles.title}>
                                Yours Favorites
                            </Text>
                        </View>
                    )}
                />
        </View>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.black,
        padding: 20,
        paddingTop: 50
    },

    title: {
        fontFamily: Fonts.bold,
        fontSize: 24,
        color: 'white',
        marginLeft: 10
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
});
