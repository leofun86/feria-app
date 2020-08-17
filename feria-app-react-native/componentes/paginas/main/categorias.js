import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Styles, StylesColoresCategorias } from '../../styles.js';
import { Button, Modal, List } from 'react-native-paper';

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
        return (
            <View>
              <Text style={{paddingTop:10, paddingBottom:10, textAlign:'center', fontSize:25, color:'#555'}}>Visitá los puestos</Text>
{/*
  PLANTAS Y ANIMALES
*/}
              <List.Section style={[Styles.caja_categoria]}>
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_1]}
                  title="Plantas y Animales"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="paw" color="#777" />}>
                  {/* PLANTAS */}
                  <Text style={[Styles.subtitulo_categorias]} >PLANTAS</Text>
                    <List.Item title="Jardinería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Florería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  {/* ANIMALES */}
                  <Text style={[Styles.subtitulo_categorias]}>ANIMALES</Text>
                    <List.Item title="Peces y Acuarios" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Mascotas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Peces y Alimento" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  ALIMENTOS Y BEBIDAS
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_2]}
                  title="Alimentos y Bebidas"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="food-fork-drink" color="#777" />}>
                  {/* COMIDA */}
                  <Text style={[Styles.subtitulo_categorias]}>COMIDA</Text>
                    <List.Item title="Fruta y Verdura" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Granja" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Pescadería (investigar)" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Frutos secos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Panificaods" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Pastas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                  {/* BEBIDAS */}
                  <Text style={[Styles.subtitulo_categorias]}>BEBIDAS</Text>
                    <List.Item title="Licores" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Vinos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Whisky" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Cerveza" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                    <List.Item title="Otros" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={()=>{}} />
                </List.Accordion>
{/*
  BAÑO Y COCINA
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_1]}
                  title="Baño y Cocina"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="cup-water" color="#777" />}>
                  <List.Item title="Desodorantes de ambiente" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Lavandinas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Detergentes" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Insecticidas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Cuidado de ropa" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Accesorios de hogar" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Limpieza de hogar" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  ELECTRÓNICA Y ENTRETENIMIENTO
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_2]}
                  title="Electrónica y Entretenimiento"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="gamepad-square" color="#777" />}>
                  {/* ENTRETENIMIENTO */}
                  <Text style={[Styles.subtitulo_categorias]}>ENTRETENIMIENTO</Text>
                    <List.Item title="Juegos de Mesa" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Juegos Mentales" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Videojuegos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Deportes" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Coleccionables" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  {/* ELECTRÓNICA */}
                  <Text style={[Styles.subtitulo_categorias]}>ELECTRÓNICA</Text>
                    <List.Item title="Accesorios para celulares" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Cables" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Almacenamiento" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  VESTIMENTA
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_1]}
                  title="Vestimenta"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="tshirt-crew" color="#777" />}>
                  {/* ROPA */}
                  <Text style={[Styles.subtitulo_categorias]}>ROPA</Text>
                    <List.Item title="Ropa deportiva" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Ropa usada" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Ropa artesanal" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Ropa masculina" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Ropa femenina" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Ropa unisex" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Accesorios" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  {/* CALZADO */}
                  <Text style={[Styles.subtitulo_categorias]}>CALZADO</Text>
                    <List.Item title="Calzado deportivo" onPress={() => {}} />
                    <List.Item title="Zapatos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Otros" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  ANTICUARIOS
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_2]}
                  title="Anticuarios"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="palette" color="#777" />}>
                  <List.Item title="Cristalería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Muebles" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Decoración" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Numismática" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Fotografías / Documentos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Filatelia" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Colecciones" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Joyería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Accesorios" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  LIBROS Y REVISTAS (pendiente de revisión)
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_1]}
                  title="Libros y Revistas"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="book-open-variant" color="#777" />}>
                  {/* LIBROS */}
                  <Text style={[Styles.subtitulo_categorias]}>LIBROS</Text>
                    <List.Item title="Libros infantiles" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Libros de estudio" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Novelas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Poesía" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Electrónica / Informática" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Cocina" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Best Seller" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  {/* REVISTAS */}
                  <Text style={[Styles.subtitulo_categorias]}>REVISTAS</Text>
                    <List.Item title="Sociales" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Ciencia" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Cocina" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Historia" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Magazine" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  BAZAR
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_2]}
                  title="Bazar"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="lamp" color="#777" />}>
                    <List.Item title="Cristalería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Luminaria" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Accesorios de cocina" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Decoración" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                    <List.Item title="Artículos para el hogar" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  BRICOLAGE
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_1]}
                  title="Bricolage"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="hammer" color="#777" />}>
                  <List.Item title="Jardinería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Herramientas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Piezas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Pinturería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Artículos sanitarios" onPress={() => {}} />
                  <List.Item title="Camping" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Pesca" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  PAPELERÍA
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_2]}
                  title="Papelería"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="paperclip" color="#777" />}>
                  <List.Item title="Artículos escolares" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Artículos de oficina" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  REPUESTOS
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_1]}
                  title="Repuestos"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="bike" color="#777" />}>
                  <List.Item title="Autos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Motos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                  <List.Item title="Bicicletas" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} onPress={() => {}} />
                </List.Accordion>
{/*
  MERCADO DE PULGAS
*/}
                <List.Accordion
                  style={[Styles.lista_categoria, StylesColoresCategorias.back_2]}
                  title="Mercado de pulgas"
                  titleStyle={{color:'#777'}}
                  left={props => <List.Icon {...props} icon="glasses" color="#777" />}>
                  <List.Item
                    left={props => <List.Icon {...props} icon="circle-small" color="#777" />} title="Arte y Artesanías" onPress={() => {}}
                  />
                  <List.Item title="Antigüedades" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Coleccionables" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Mercería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Piedras" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Lentes" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Electrodomésticos" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Ferretería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Herrería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Carpintería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Cerrajería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Talabartería" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                  <List.Item title="Mates y accesorios" left={props => <List.Icon {...props} icon="circle-small" color="#777" />} onPress={() => {}} />
                </List.Accordion>
              </List.Section>
            </View>
        )
}

export default Categorias

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