import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';

import Header from '../../Components/Header';
import CardProduct from '../../Components/CardProduct';
import ListaProdutos from '../../../config/produtos.json';

const Home = () =>{

    const [produtos, setProdutos] = useState(ListaProdutos)

    return(
        <>
            <Header titulo="Catálogo de Produtos"/>
            <ScrollView> 
                {produtos.map((produto) =>(                
                    <CardProduct key={produto.id} prod={produto}/>                
                ))} 
            </ScrollView>                       
        </>
    );
}

export default Home;