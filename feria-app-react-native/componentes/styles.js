import React from 'react';
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#14a4bc',
        paddingTop: 5,
        paddingBottom: 2,
        paddingLeft: 15,
        display:'block',
    },
    menu: {
        paddingTop: 55,
        flexDirection: 'row',
        justifyContent: 'left',
    },
    text: {
      fontSize: 40,
    },
    favicon: {
      //padding: 10,
      //borderRadius: '100%',
      //backgroundColor: '#ffa500',
      color: '#ffffff'
    },
    iconMenu: {
        //padding: 10,
        //borderRadius: '100%',
        //backgroundColor: '#ffa500',
        color: '#333'
      },
    img: {
      width: 'cover',
      height: 150
    },
    button: {
      widht:200
    },
    caja_categoria: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        width:'100%',
        paddingTop:0,
        paddingBottom:10,
    },
    lista_categoria:{
        backgroundColor:'orange',
        color:'#fff',
        paddingTop:0,
        paddingBottom:0
    },
    subtitulo_categorias: {
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#ddd',
        color:'#888',
    }
  });

  export const StylesColoresCategorias = StyleSheet.create ({
      back_1: { backgroundColor:'#efdfb4',},
      back_2: { backgroundColor:'#ead499',},
      plantas_animales: { backgroundColor:'#58b300', },
      alimentos_bebidas: { backgroundColor:'#621376', },
      banio_cocina: { backgroundColor:'#f0b500', },
      libros_revistas: { backgroundColor:'#50c4b8', },
      vestimenta: { backgroundColor:'#eb9d00', },
      electronica_entretenimiento: { backgroundColor:'#ff0000', },
      vestimenta: { backgroundColor:'#f061cd', },
      anticuarios: { backgroundColor:'#b5843e', },
      bazar: { backgroundColor:'#b6a91d', },
      bricolage: { backgroundColor:'#3164c2', },
      papeleria: { backgroundColor:'#efdfb4', },
      repuestos: { backgroundColor:'#888', },  
      mercado_pulgas: { backgroundColor:'#2d2d76' },
  })