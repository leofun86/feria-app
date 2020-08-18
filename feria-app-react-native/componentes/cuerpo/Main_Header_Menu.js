import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Styles } from '../styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';

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

const MenuScreen = () => {
    const [visible, setVisible] = React.useState(false);
  
    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);
  
    return (
      <Provider>
        <View>
            <View style={[Styles.navbar]}>
                <Menu
                    style={[Styles.menu]}
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Text>
                            <Button onPress={openMenu}>
                                <FontAwesomeIcon icon={fa.faBars} size={30} style={Styles.favicon} />
                            </Button>
                        </Text>
                    }>
                    <Menu.Item
                      icon="bus"
                      onPress={() => {}} title="Cómo llegar" />
                    <Divider />
                    <Menu.Item
                      icon="store"
                      onPress={() => navigate('Details')} title="Paseo de la Feria" />
                    <Divider />
                    <Menu.Item
                      icon="book-open-page-variant"
                      onPress={() => {}} title="Wiki-Feria" />
                    <Divider />
                    <Menu.Item
                      icon="cloud-download"
                      onPress={() => {}} title="Descargas" />
                </Menu>
            </View>
        </View>
      </Provider>
    );
  };

  export default MenuScreen;

/*
class Menu extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Login2" component={Login2} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
*/