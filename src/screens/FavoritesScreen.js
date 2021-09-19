import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import HomeItem from '../components/main/HomeItem';
import Colors from '../styles/Colors';

const FavoritesScreen = () => {
    const favCharacters = useSelector(state => state.characters.favoriteCharacter);

    if (favCharacters.length === 0 || !favCharacters) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite characters found. Start adding some!</DefaultText>
            </View>
        );
    };

    const renderGridItem = (itemData) => {
        return (
            <HomeItem
                name={itemData.item.name}
            />
        );
    };

    return (
        <View style={styles.content}>
            <FlatList 
                data={favCharacters}
                keyExtractor={(item) => item.created}
                renderItem={renderGridItem}
            />
        </View>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
        padding: 20,
    }
});
