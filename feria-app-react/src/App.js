import React, {Component} from 'react';
import './App.css';
import Menu from './componentes/header/navbar.js'
import Index from './componentes/cuerpo/index.js'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Index />
      </div> 
    )
  }
}

export default App;
