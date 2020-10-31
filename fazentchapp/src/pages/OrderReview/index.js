import React, { useState } from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';

import Header from '../../Components/Header';
import CardItem from '../../Components/CardItem';

import Style from './style';
import style from './style';


const OrderReview = () =>{

    const [itensPedido, setItensPedido] = useState([
        {
            id: 1,
            imagem: "https://img.imirante.com.br/2020/03/12/1584009266-282284889-810x471.jpg",
            nome: "Doce de Leite",
            quantidade: 1,
            preco: 15.00 
        },
        {
            id: 2,
            imagem: "https://img.olx.com.br/images/72/728925016649468.jpg",
            nome: "Leite de Vaca",
            quantidade: 2,
            preco: 9.90 
        }
        
    ]);

    return(
        <>
            <Header titulo="Revisão do Pedido"/>
            <View style={Style.container}>
                <View style={Style.legenda}>
                    <Text style={Style.texto}>                       </Text>
                    <Text style={Style.texto}>Produto</Text>
                    <Text style={Style.texto}>Qtd</Text>
                    <Text style={Style.texto}>Valor Und</Text>
                    <Text style={Style.texto}>SubTotal</Text>
                </View>                
                <View style={style.cardItem}>  
                    <ScrollView>
                        {itensPedido.length !== 0 ?  
                        itensPedido.map((item) =>(                            
                            <CardItem produto={item} />
                        )) : <Text style={style.cestaVazia}>Cesta Vazia</Text>}                                
                    </ScrollView>  
                </View>                              
                <View style={Style.legenda}>
                    <Text style={Style.texto}>TOTAL:</Text>                    
                    <Text style={Style.texto}>R$ 13.30</Text>
                </View>
                <View style={style.buttonArea}>
                    <TouchableHighlight 
                        style={style.ok} 
                            onPress={() => alert('Cadastrou')} 
                                underlayColor={'#DDDDDD'}
                    >
                        <Text style={style.textoButton}>Enviar Pedido</Text>
                    </TouchableHighlight> 

                    <TouchableHighlight 
                        style={style.cancel} 
                            onPress={() => alert('Cancelou')} 
                                underlayColor={'#DDDDDD'}
                    >
                        <Text style={style.textoButton}>Cancelar</Text>
                    </TouchableHighlight>                                  
                </View>
            </View>
        </>
    );
}

export default OrderReview;