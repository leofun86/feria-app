import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
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

const InputsForm = ({ navigation }) => {
return (
    <View style={[s.container]}>
        <TextInput
            style={[s.formControl, s.my2]}
            placeholder='Correo'
            id='login_correo'
            name='correo'
        />
        <TextInput
            style={[s.formControl, s.mt2, s.mb3]}
            placeholder='Password'
            id='login_password'
            name='password'
        />
        <Button title='Entrar' onPress={() => navigation.navigate('Login2')} />
    </View>
);
}

const Login = () => {
    return (
      <View>
        <View style={[styles.navbar, s.mb5]}>
          <Text style={{textAlign:'center', color:'white', fontWeight:600, fontSize:25}}>
            <FontAwesomeIcon icon={faStoreAlt} style={{color:'white', marginRight:10, position:'relative', top:4}} size={35}/>
            Feria Tristán
          </Text>
        </View>
        <Text style={{fontSize:20, textAlign: 'center'}}>LOGIN</Text>
        <View style={[s.containerFluid]}>
          <InputsForm />
        </View>
      </View>
    )
}
  

export default Login


