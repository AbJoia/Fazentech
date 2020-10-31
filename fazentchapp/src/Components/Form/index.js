import React from 'react';
import {Text, View, TextInput} from 'react-native';

import style from './style';

const Form = () =>{
    return(
        <View style={style.container}>
            <View>
                <Text style={style.titulo}>Dados Pessoais</Text>
                <TextInput style={style.input} placeholder={"Nome"}/>
                <TextInput style={style.input} placeholder={"E-mail"}/>
            </View>
            <View>
                <Text style={style.titulo}>Endereço de entrega</Text>
                <TextInput style={style.input} placeholder={"Endereço"}/>
                <TextInput style={style.input} placeholder={"Bairro"}/>
                <TextInput style={style.input} placeholder={"Cidade"}/>
                <TextInput style={style.input} maxLength={2} placeholder={"Estado"}/>
                <TextInput style={style.input} placeholder={"CEP"}/>
            </View>
        </View>
    );
}

export default Form;