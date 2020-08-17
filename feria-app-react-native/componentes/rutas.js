import { StackNavigator } from 'react-navigation';

import Login from './index/login.js';
//import crearCuentaComerciante from './index/crear_cuenta_comerciante';

export default StackNavigator({
  Login: { screen: Login },
  //Detail: { screen: DetailScreen },
});