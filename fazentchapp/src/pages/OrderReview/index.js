import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, TouchableHighlight, Alert} from 'react-native';
import email from 'react-native-email';

import Header from '../../Components/Header';
import CardItem from '../../Components/CardItem';
import Usuario from '../../../config/usuario.json';

import Style from './style';

const OrderReview = ({route}) =>{     

    const {params} = route; 

    const [usuario] = useState(Usuario)
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
    
    const confirmarPedido = () =>{
        Alert.alert("Fechar Pedido?",
         "Deseja fechar o pedido e enviar?",
         [
             {
                 text: 'Confirmar',
                 onPress: () => enviarEmail()
             },
             {
                 text: 'Cancelar',
                 style: 'cancel'
             }
         ],

         {cancelable: false}      
        )
    }

    const enviarEmail = () =>{
        const to = 'produtosfazentech@gmail.com';
        email(to, {            
            subject: 'Novo Pedido',
            body: 
            "Informações do Pedido\n\n" +
            
            itensPedido.map( item =>(
                "\n" 
                + item.produto.nome 
                + "/ Qtd: " 
                + item.quantidade 
                + "......................... R$" 
                + (item.quantidade * item.produto.preco).toFixed(2)                
            ))

            + "\n\nTotal do Pedido: ................................ R$" + retornaTotal().toFixed(2)
            + "\n\nDados para Entrega:\n"
            + "Nome: " + usuario.nome
            + "\n E-mail: " + usuario.email
            + "\n\nLogradouro : " + usuario.endereco.logradouro
            + "\nBairro: " + usuario.endereco.bairro
            + "\nCidade: " + usuario.endereco.cidade
            + "\nEstado: " + usuario.endereco.estado
            + "\nCEP: " + usuario.endereco.cep

        }).catch(console.error)               
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
                <View style={Style.cardItem}>  
                    <ScrollView>                                                
                        {itensPedido.length !== 0 ?  
                        itensPedido.map((item) =>(                            
                            <CardItem key={item.produto.id} produto={item}/>
                        )) : <Text style={Style.cestaVazia}>Cesta Vazia</Text>}                                
                    </ScrollView>  
                </View>                              
                <View style={Style.legenda}>
                    <Text style={Style.texto}>TOTAL:</Text>                    
                    <Text style={Style.texto}>R$ {retornaTotal().toFixed(2)}</Text>
                </View>
                <View style={Style.buttonArea}>
                    <TouchableHighlight 
                        style={Style.ok} 
                            onPress={() => confirmarPedido()} 
                                underlayColor={'#DDDDDD'}
                    >
                        <Text style={Style.textoButton}>Enviar Pedido</Text>
                    </TouchableHighlight> 

                    <TouchableHighlight 
                        style={Style.cancel} 
                            onPress={() => alert("Cancelou")} 
                                underlayColor={'#DDDDDD'}
                    >
                        <Text style={Style.textoButton}>Cancelar</Text>
                    </TouchableHighlight>                                  
                </View>
            </View>
        </>
    );
}

export default OrderReview;