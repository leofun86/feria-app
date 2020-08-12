import React, {Component} from 'react'
import {View, Text} from 'react-native'
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

class Cuerpo extends Component {
    render() {
        return (
            <View style={[s.containerFluid]}>
                <Text style={[s.text, s.h1, s.textPrimary, s.myXs1, s.myMd3]}>Hello world!</Text>
                <Text style={[s.text, s.py3, {fontSize: 5 * c.REM}]}>🤓🚀🚀🚀</Text>
            </View>
        )
    }
}

export default Cuerpo