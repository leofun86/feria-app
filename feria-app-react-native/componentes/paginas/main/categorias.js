import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { Styles, StylesColoresCategorias } from '../../styles.js';
import { Button, Modal, List } from 'react-native-paper';
import { ItemsMenu } from './items_menu.js';

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

const Categorias = () => {
        const fragment = document.createDocumentFragment();
        return (
            <View>
              <Text style={{paddingTop:10, paddingBottom:10, textAlign:'center', fontSize:25, color:'#555'}}>Visitá los puestos</Text>
{/*
  PLANTAS Y ANIMALES
*/}
              <List.Section style={[Styles.caja_categoria]}>
                {
                  ItemsMenu.map(item1=>{
                    return (
                      <List.Accordion
                        style={[Styles.lista_categoria, {backgroundColor:item1.back}]}
                        title={item1.title}
                        titleStyle={{color:item1.color}}
                        left={props => <List.Icon {...props} icon={item1.icon} color={item1.color} />}>
                        {item1.items.map(item2=>{
                          if(item2.title) {
                            return (
                              <View style={[Styles.caja_list_item]}>
                              <Text style={[Styles.subtitulo_categorias]} >{item2.title}</Text>
                              {
                                item2.items.map(item3=>{
                                  return (
                                    <List.Item style={[Styles.item_style_categoria]} titleStyle={[Styles.item_titleStyle_categoria]} title={[<FontAwesomeIcon icon={fa.faCircle} size={12} style={Styles.icono_categoria} />, item3]} onPress={() => {}} onPress={()=> focas(1)} />
                                  )
                                })
                              }
                              </View>
                            )
                          } else {
                            return (
                              <View style={[Styles.caja_list_item]}>
                                <List.Item style={[Styles.item_style_categoria]} titleStyle={[Styles.item_titleStyle_categoria]} title={[<FontAwesomeIcon icon={fa.faCircle} size={12} style={Styles.icono_categoria} />, item2]} onPress={() => {}} onPress={()=> focas(1)} />
                              </View>
                            )
                          }
                        })}
                      </List.Accordion>
                    )
                  })
                }
              </List.Section>
            </View>
        )
}

export default Categorias

function focas(numero) {
  switch(numero) {
    case 1:
      console.log('presionado 1')
    break
    case 2: console.log('presionado 2')
    break
  }
}

/*
<View style={[Styles.caja_botones_categoria]}>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.plantas_animales]}
                  color="white"
                  icon="paw"
                  compact={true}
                  uppercase={false}
                  onPress={showModal}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Plantas y Animales
                </Button>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.alimentos_bebidas]}
                  color="white"
                  icon="food-fork-drink"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Alimentos y Bebidas
                </Button>
              </View>
              <View style={[Styles.caja_botones_categoria]}>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.banios_bebidas]}
                  color="white"
                  icon="cup-water"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Baños y Cocina
                </Button>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.libros_revistas]}
                  color="white"
                  icon="book-open-variant"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Libros / Revistas
                </Button>
              </View>
              <View style={[Styles.caja_botones_categoria]}>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.vestimenta]}
                  color="white"
                  icon="tshirt-crew"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Vestimenta
                </Button>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.electronica_entretenimiento]}
                  color="white"
                  icon="gamepad-square"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Electronica / Entretenimiento
                </Button>
              </View>
              <View style={[Styles.caja_botones_categoria]}>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.anticuarios]}
                  color="white"
                  icon="paw"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Anticuarios
                </Button>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.bazar]}
                  color="white"
                  icon="paw"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Bazar
                </Button>
              </View>
              <View style={[Styles.caja_botones_categoria]}>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.bricolage]}
                  color="white"
                  icon="paw"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Bricolage
                </Button>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.papeleria]}
                  color="black"
                  icon="paw"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Papelería
                </Button>
              </View>
              <View style={[Styles.caja_botones_categoria]}>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.repuestos]}
                  color="white"
                  icon="wrench"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Repuestos
                </Button>
                <Button
                  style={[Styles.lista_categoria, StylesColoresCategorias.mercado_pulgas]}
                  color="white"
                  icon="paw"
                  compact={true}
                  uppercase={false}
                  onPress={() => console.log('Pressed')}
                  labelStyle={{fontSize:14}}
                  contentStyle={{height:50, display:'flex', flexDirection:'row', justifyContent:'left'}}
                >
                  Percado de pulgas
                </Button>
              </View>
*/