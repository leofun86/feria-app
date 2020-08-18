import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import HeaderMenu from './componentes/cuerpo/Main_Header_Menu.js';
import FooterMenu from  './componentes/cuerpo/Main_Footer_Menu.js';
import Main from './componentes/paginas/main/main.js';
import Login from  './componentes/index/login.js';

const App = ()=>{
  return (
    <View style={{height:'100%'}}>
      <Login />
    </View>
  ); 
}

export default App;

/*export default function App() {
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
}*/