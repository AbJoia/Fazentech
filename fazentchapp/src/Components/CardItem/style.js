import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

    cardItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        backgroundColor: '#BABD75',
        height: 75,
        borderRadius: 5,
        marginTop: 5
    },

    imgArea:{
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#cccc',
        width: 60,
        height: 60        
    },
});

export default style;
