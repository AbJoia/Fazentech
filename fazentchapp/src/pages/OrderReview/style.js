import React from 'react';
import {StyleSheet} from 'react-native';


const style = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginTop: 20  
    },

    legenda:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft:10,
        backgroundColor: '#7593BD',
        height: 30,
    },

    texto:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },

    cestaVazia:{
        color:'#928F94',
        textAlign: "center",
        fontSize: 30,
    },

    cardItem:{
        height: 400,
    },

    buttonArea:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textoButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    },

    ok:{
        width: 150,
        height: 60,
        borderRadius: 3,
        backgroundColor: '#46C87C',
        justifyContent: "center",
        alignItems: "center"
    },

    cancel:{
        width: 150,
        height: 60,
        borderRadius: 3,
        backgroundColor: '#D63422',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default style;