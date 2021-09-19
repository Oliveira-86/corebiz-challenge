import React from 'react'
import { StyleSheet, Dimensions, View, Image } from 'react-native';
import images from '../../assets/images';

const { width, height } = Dimensions.get('screen');
const sword = images.sword;
const logo = images.logo;

const Header = () => {
    return (
        <View
            styles={{ 
                width: width * 0.6, 
                height: height * 0.3,
                backgroundColor: 'red'
            }}
        />
    );
};

export default Header;

const styles = StyleSheet.create({})
