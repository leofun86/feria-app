import * as React from 'react';
import { View, ScrollView, Image  } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import HeaderMenu from './Main_Header_Menu.js';
import { Styles } from '../styles.js';
import Login from './../index/login.js';



const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const IndexMenu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'inicio', title: 'Inicio', icon: 'home' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: Login
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

export default IndexMenu;