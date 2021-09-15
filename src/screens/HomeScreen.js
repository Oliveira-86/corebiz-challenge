import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import HomeItem from '../components/main/HomeItem';


const HomeScreen = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(resData => setData(resData.results));
    }, []);

    const renderGridItem = (itemData) => {
        return <HomeItem
                    name={itemData.item.name} 
                    onSelected={() => {
                        props.navigation.navigate('Details', {
                            characterName: itemData.item.name
                        })
                    }} 
                />
    }

    return (
        <View style={styles.container}>
            <View style={{ padding: 20, backgroundColor: 'rgba(0,0,0, 0.8)' }}>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={renderGridItem}
                />
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});
