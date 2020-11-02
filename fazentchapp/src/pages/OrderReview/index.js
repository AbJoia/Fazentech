import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';

import Header from '../../Components/Header';
import CardItem from '../../Components/CardItem';

import Style from './style';
import style from './style';


const OrderReview = ({route}) =>{

    const {params} = route;       
    
    const [itensPedido, setItensPedido] = useState([
        // {            
        //     produto: {
        //         id: "",
        //         imagem: "",
        //         nome: "",
        //         preco: ""
        //     }, 
        //     quantidade: ""            
        // }
    ]);        
    
    useEffect(() =>{
         if(params){
            setItensPedido(params[0])
         }         
                  
    },[params])    

    const retornaTotal = () =>{
        let sum = itensPedido.reduce((acumulator, total) =>
         acumulator + total.quantidade * total.produto.preco, 0)
        return sum;
    }     

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
                            <CardItem key={item.produto.id} produto={item}/>
                        )) : <Text style={style.cestaVazia}>Cesta Vazia</Text>}                                
                    </ScrollView>  
                </View>                              
                <View style={Style.legenda}>
                    <Text style={Style.texto}>TOTAL:</Text>                    
                    <Text style={Style.texto}>R$ {retornaTotal().toFixed(2)}</Text>
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
                            onPress={() => alert("Cancelou")} 
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