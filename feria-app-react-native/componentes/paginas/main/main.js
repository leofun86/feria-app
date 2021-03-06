import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Styles } from './../../styles.js';
import Categorias from './categorias.js';
import HeaderMenu from './../../cuerpo/Main_Header_Menu';
import FooterMenu from './../../cuerpo/Main_Footer_Menu';

const Main = () => {
    return (
        <View style={{height:'100%'}}>
            <View style={{zIndex:1}}>
                <HeaderMenu />
            </View>
            <View style={{height:'88%', zIndex:0}}>
                <FooterMenu />
            </View>
        </View>
    )
}

export default Main