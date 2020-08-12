import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import {styles} from './../../App.js';

const
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom constants
const constants = {
  BODY_COLOR, TEXT_MUTED,
};

// custom classes
const classes = {
  title: {
    color: 'red',
  }
};

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
const {styles: s, constants: c} = bootstrapStyleSheet;

class Categorias extends Component {
    render() {
        return (
            <View style={{flex:1, flexDirection:'row', width:'100%', paddingTop:10, paddingBottom:10}}>
                <View style={{width:200, borderRadius:5}}>
                    <TouchableHighlight
                    style={styles.caja_categoria}
                    underlayColor='#fff'>
                        <View style={[styles.boton_categoria]}>
                        <FontAwesomeIcon icon={faPaw} size={30} style={styles.icono_categoria} />
                        <Text>Plantas y Animales</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{width:200, borderRadius:5}}>
                    <TouchableHighlight
                    style={styles.caja_categoria}
                    underlayColor='#fff'>
                        <View style={[styles.boton_categoria]}>
                        <FontAwesomeIcon icon={faPaw} size={30} style={styles.icono_categoria} />
                        <Text>Plantas y Animales</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                </View>
        )
    }
}

export default Categorias