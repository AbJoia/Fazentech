import React, { useState } from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import style from './style';

const CardProduct = ({prod}) =>{

    const [quantidade, setQuantidade] = useState(0);

    const incrementaQuantidade = () =>{
        setQuantidade(quantidade +1);
    }

    const decrementaQuantidade = () =>{
        if(quantidade !== 0){
            setQuantidade(quantidade -1);
        }        
    }

    return(
        <View style={style.container}>            
            <View>
                <Image style={style.imgArea} source={{uri: prod.imagem}}/>                
            </View>
            <View>
                <Text style={style.texto}>{prod.nome}</Text>
                <Text style={style.texto}>R$ {prod.preco.toFixed(2)}</Text>
                <View style={style.qtd}>

                    <TouchableHighlight 
                        style={style.areaPress}
                            underlayColor={"#DDDDDD"}
                                onPress={() => decrementaQuantidade()}
                                >
                        <Text style={style.textoqtd}>-</Text>
                    </TouchableHighlight>

                    <Text style={style.textoqtd}>{quantidade}</Text>

                    <TouchableHighlight
                        style={style.areaPress} 
                            underlayColor={"#DDDDDD"}
                                onPress={() => incrementaQuantidade()}
                                >
                        <Text style={style.textoqtd}>+</Text>
                    </TouchableHighlight>

                </View>
                <TouchableHighlight style={style.button}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Pressed!')}
                    >
                    <Text style={style.texto}>Add Cesta</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default CardProduct;