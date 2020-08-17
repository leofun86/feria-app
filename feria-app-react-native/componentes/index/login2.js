import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

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

const Login2 = () => {
const [valueCorreo, placeHolderCorreo] = React.useState('Catarata');
const [valuePassword, placeHolderPassword] = React.useState('Contraseña');
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
        <Button title='Entrar' />
    </View>
);
}
  

export default Login2


