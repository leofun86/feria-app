import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Styles } from './../../styles.js';
import Categorias from './categorias.js';

const Main = () =>
    <ScrollView>
        <View>
            <Image source={require('./../../../assets/portada.jpg')} style={[Styles.img]} />
            <View>
                <Categorias />
            </View>
        </View>
    </ScrollView>

export default Main