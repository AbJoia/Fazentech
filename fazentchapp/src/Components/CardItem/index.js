import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';



const CardItem = ({produto}) =>{
    
    const subTotal = () =>{
        return produto.produto.preco * produto.quantidade;        
    }

    //Verificar nivel de estrutura PRODUTO

    return(
        <View style={style.cardItem}>
            <Image style={style.imgArea} source={{uri: produto.produto.imagem}}/>
            <Text>{produto.produto.nome}</Text>
            <Text>{produto.quantidade}</Text>
            <Text>R$ {produto.produto.preco.toFixed(2)}</Text>
            <Text>R$ {subTotal().toFixed(2)}</Text>
        </View>
    );
}

export default CardItem;