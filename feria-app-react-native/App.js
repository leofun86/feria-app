import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import HeaderMenu from './componentes/cuerpo/headerMenu.js';
import FooterMenu from  './componentes/cuerpo/footerMenu.js';

const App = ()=>{
  return (
    <View style={{height:'100%'}}>
      <View style={{zIndex:1}}>
        <HeaderMenu />
      </View>
      <View style={{height:'88%', zIndex:0}}>
        <FooterMenu />
      </View>
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