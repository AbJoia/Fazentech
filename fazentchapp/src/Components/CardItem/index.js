import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';



const CardItem = ({produto}) =>{
    
    const subTotal = () =>{
        return produto.preco * produto.quantidade;        
    }


    return(
        <View style={style.cardItem}>
            <Image style={style.imgArea} source={{uri: produto.imagem}}/>
            <Text>{produto.nome}</Text>
            <Text>{produto.quantidade}</Text>
            <Text>R$ {produto.preco.toFixed(2)}</Text>
            <Text>R$ {subTotal().toFixed(2)}</Text>
        </View>
    );
}

export default CardItem;