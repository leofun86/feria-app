import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import Categorias from './componentes/index/categorias.js';

export const styles = StyleSheet.create({
  navbar: {
    //flex: 1,
    backgroundColor: '#14a4bc',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
  },
  text: {
    fontSize: 40,
  },
  favicon: {
    padding: 10,
    borderRadius: '100%',
    backgroundColor: '#ffa500',
    color: '#ffffff'
  },
  img: {
    width: 'cover',
    height: 150
  },
  button: {
    widht:200
  },
  caja_categoria: {
    display:'flex',
    alignItems: 'center',
  },
  boton_categoria:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#fff'
  },
  icono_categoria: {
    padding: 5,
    color: '#ffffff'
  },
});

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

export default function App() {
  return (
    <View style={[s.containerFluid]}>
      <View style={[styles.navbar]}>
        <FontAwesomeIcon icon={faStoreAlt} size={40} style={styles.favicon} />
      </View>
      <View>
        <Image source={require('./assets/portada.jpg')} style={[styles.img]} />
      </View>
      <View>
        <Categorias />
      </View>
    </View>
  );
}