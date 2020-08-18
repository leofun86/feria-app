import React from 'react';
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#14a4bc',
        paddingTop: 5,
        paddingBottom: 2,
        paddingLeft: 5,
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
        paddingLeft:30,
        paddingRight:30
    },
    lista_categoria:{
        color:'#fff',
        paddingTop:0,
        paddingBottom:0,
        borderRadius:10,
        marginBottom:5,
    },
    caja_list_item: {
      paddingLeft:0,
      paddingBottom:10,
    },
    item_style_categoria: {
      paddingTop:0,
      paddingBottom:0,
    },
    item_titleStyle_categoria: {
      marginTop:0,
      marginBottom:0,
      color:'#888',
    },
    item_icon: {
      height:20,
    },
    icono_categoria: {
      color:'#a7d5dc',
      position:'relative',
      top:0,
      marginRight:6,
    },
    subtitulo_categorias: {
        width:'50%',
        borderRadius:5,
        paddingLeft:15,
        paddingTop:5,
        paddingBottom:5,
        color:'#83c5d0',
        fontWeight:700,
        //backgroundColor:'#ddd',
        //color:'#888',
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