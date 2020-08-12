import React, {Component} from 'react';
import './App.css';
import Menu from './componentes/header/navbar.js'
import Index from './componentes/cuerpo/index.js'
import Footer from './componentes/footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Index />
        <Footer />
      </div> 
    )
  }
}

export default App;
