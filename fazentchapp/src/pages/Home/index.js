import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Alert, Button } from 'react-native';

import Header from '../../Components/Header';
import CardProduct from '../../Components/CardProduct';
import ListaProdutos from '../../../config/produtos.json';

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

    const tamanhoCesta = () =>{        
        cesta.forEach(c => {
            console.log(c)
        });
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
            <Button title="Cesta de Produtos" onPress={() => navigation.navigate('OrderReview', [cesta])}></Button> 
            : null}                      
        </>
    );
}

export default Home;