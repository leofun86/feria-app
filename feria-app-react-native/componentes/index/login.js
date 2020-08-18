import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './../paginas/main/main.js';

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

const Manis = ()=> {
  return (
    <Main />
  )
}

const Stack = createStackNavigator();

const InputsForm = ({ navigation }) => {
  return (
      <View style={[s.container]}>
        
      </View>
  );
};

const Login = ({navigation}) => {
  return (
    <View style={{height:'100%'}}>
      <View style={[s.mb5, s.pb2, s.pt2, {backgroundColor:'#14a4bc'}]}>
        <Text style={{textAlign:'center', color:'#fff', fontWeight:600, fontSize:25}}>
          <FontAwesomeIcon icon={faStoreAlt} style={{color:'#fff', marginRight:10, position:'relative', top:4}} size={35}/>
          Feria Tristán
        </Text>
      </View>
      <Text style={[[s.mt5], {fontSize:20, textAlign: 'center'}]}>LOGIN</Text>
      <View style={[s.containerFluid]}>
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
          <Button
            title="Entrar"
            onPress={() =>
              navigation.navigate('Main')
            }
          />
          <View style={{width:'100%', paddingTop:15, textAlign:'center'}}>
            <Text style={{color:'#14a4bc', fontSize:13}}>¿No tenés cuenta?</Text>
            <Text style={{color:'#14a4bc', fontSize:16, fontWeight:600, cursor:'pointer'}}>CREAR CUENTA</Text>
          </View>
      </View>
    </View>
  )
}

const ProfileScreen = () => {
  return <Text>This is Jane's profile</Text>;
};

const App2 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
  

export default App2


