import * as React from 'react';
import { View, ScrollView, Image  } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import HeaderMenu from './Main_Header_Menu.js';
import { Styles } from '../styles.js';
import Contenido from '../paginas/main/contenido.js';



const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const FooterMenu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'inicio', title: 'Inicio', icon: 'home' },
    { key: 'favoritos', title: 'Favoritos', icon: 'heart' },
    { key: 'mapa', title: 'Mapa', icon: 'map' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Contenido,
    favoritos: AlbumsRoute,
    mapa: RecentsRoute,
  });

  return (
    <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#14a4bc' }}
    />
  );
};

export default FooterMenu;