import React, {useState } from 'react';
import { Text, ScrollView, TouchableHighlight } from 'react-native';

import Header from '../../Components/Header';
import CardProduct from '../../Components/CardProduct';
import ListaProdutos from '../../../config/produtos.json';

import Style from './style';

const Home = ({navigation}) =>{
    
    const [produtos] = useState(ListaProdutos);
    const [cesta, setCesta] = useState([
        // {
        //     produto:{
        //         id: "",
        //         imagem: "",
        //         nome: "",
        //         preco: ""
        //     },
        //     quantidade: "" 
        // }       
        
    ]);

    const setCestaPedido = (produto, quantidade) =>{                    
        setCesta([...cesta, {produto: produto, quantidade: quantidade}])                            
    }      

    return(
        <>
            <Header titulo="Catálogo de Produtos"/>
            <ScrollView> 
                {produtos.map((produto) =>(                
                    <CardProduct key={produto.id} prod={produto} cestaPedido={setCestaPedido}/>                
                ))} 
            </ScrollView>
            {cesta.length > 0 ?
            <TouchableHighlight 
                style={Style.areaPress}
                    underlayColor={"#DDDDDD"}
                    onPress={() => navigation.navigate('Cesta de Produtos', [cesta])}
                        >
                <Text style={Style.texto}>Revisar Produtos</Text>
            </TouchableHighlight>            
            : null}                      
        </>
    );
}

export default Home;