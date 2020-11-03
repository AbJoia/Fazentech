import React, { useState } from 'react';
import {
    Text, 
    View,
    TextInput,
    TouchableHighlight,
    ScrollView,
    Alert
} from 'react-native';

import Estados from '../../../config/estados.json';
import {mask, unMask} from 'remask';

import * as Yup from 'yup';

import style from './style';

const Form = ({navigation}) =>{

    const cepPattern = '99999-999';

    const [dadosCadastro, setDadosCadastro] = useState(
        {
            nome: "",
            email: "",
            endereco:{
                logradouro: "",
                bairro: "",
                cidade: "",
                estado: "",
                cep: ""
            }
        }
    );    

    //Validação formulario com YUP
    const validaFormYup = async () => {
        try {
            const schema = Yup.object().shape({ 
                nome: Yup.string().required("Campo nome é obrigatório."),
                email: Yup.string()
                .email("Insira um email válido")
                .required("Campo email é obrigatório."),
                endereco: Yup.object({
                    logradouro: Yup.string()
                    .required("Campo logradouro é obrigatório.")
                    .max(100, "Máximo 100 caracteres."),
                    bairro: Yup.string()
                    .required("Campo bairro é obrigatório.")
                    .max(100, "Máximo 100 caracteres."),
                    cidade: Yup.string()
                    .required("Campo cidade é obrigatório.")
                    .max(100, "Máximo 100 caracteres"),
                    estado: Yup.string()
                    .required("Campo estado é obrigatório")
                    .max(2, "Máximo 2 caracteres"),
                    cep: Yup.string()
                    .matches(/^[0-9]{8}$/,"CEP deve conter 8 dígitos numéricos")
                })  
            })           

            await schema.validate(dadosCadastro, {
                abortEarly: false,
            });

            return true;

        } catch (err) {
        if (err instanceof Yup.ValidationError) {
            const errorMessages = {};

            err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
            Alert.alert("Erro Validação!",error.message);
            });
        }
        }
    };

    //Metodo realiza chamadas de validações
    const validaDados = async () =>{
        if(await validaFormYup()){
            if(validaEstado(dadosCadastro.endereco.estado)){
                cadastraUsuario();
            }else{
                Alert.alert("UF inválida!", "Insira um estado válido.")
            }
        }        
    }

   //Verifica Existencia UF 
   const validaEstado = (uf) =>{
        let valido = Estados.filter((estado) =>{
            return estado === uf.toUpperCase();
        });

        if(valido.length > 0){
            return true;
        }
        return false;
   }

   //Cadastra usuario
   const cadastraUsuario = () =>{
       //Logica de conexão com API para cadastro no Banco de Dados
       Alert.alert("Cadastro realizado.", `${dadosCadastro.nome} foi cadastrado com sucesso.`);
       navigation.navigate('Home')       
   }

   //Confirmação para cancelar cadastro
   const confirmaCancelar = () =>{
       Alert.alert("Atenção!", 
       "Deseja realmente cancelar o cadastro?",
       [
           {
               text: "Confirmar",
               onPress: () => navigation.navigate('Home')
           },
           {
               text: 'Cancelar',
               style: 'Cancel'
           }           
       ],
       {cancelable: false}
       )
   }
    
    return(
        <ScrollView>
            <View style={style.container}>            
                <View>
                    <Text style={style.titulo}>Dados Pessoais</Text>
                    <TextInput 
                        style={style.input} 
                            placeholder={"Nome"}
                                value={dadosCadastro.nome}                                    
                                    onChangeText ={(text) => 
                                        setDadosCadastro({...dadosCadastro, nome: text})
                                    }
                    />
                    <TextInput 
                        style={style.input} 
                            placeholder={"E-mail"}
                                value={dadosCadastro.email}
                                    onChangeText={(text) => 
                                        setDadosCadastro({...dadosCadastro, email: text})
                                    }                    
                    />
                </View>
                <View>
                    <Text style={style.titulo}>Endereço de entrega</Text>
                    <TextInput 
                        style={style.input} 
                            placeholder={"Endereço"}
                                value={dadosCadastro.endereco.logradouro}
                                    onChangeText={(text) =>
                                        setDadosCadastro({...dadosCadastro, 
                                            endereco: {...dadosCadastro.endereco, logradouro: text}})}        
                    />
                    <TextInput 
                        style={style.input} 
                            placeholder={"Bairro"}
                                value={dadosCadastro.endereco.bairro}
                                    onChangeText={(text) => 
                                        setDadosCadastro({...dadosCadastro,
                                        endereco: {...dadosCadastro.endereco, bairro: text}})}            
                    />
                    <TextInput 
                        style={style.input} 
                            placeholder={"Cidade"}
                                value={dadosCadastro.endereco.cidade}
                                    onChangeText={(text) => 
                                        setDadosCadastro({...dadosCadastro, 
                                            endereco: {...dadosCadastro.endereco, cidade: text}})}            
                    />
                    <TextInput 
                        style={style.input} 
                            maxLength={2} 
                                placeholder={"Estado"}
                                    value={dadosCadastro.endereco.estado}
                                        onChangeText={(text) => 
                                            setDadosCadastro({...dadosCadastro, 
                                                endereco: {...dadosCadastro.endereco, estado: text}})}            
                    />
                    <TextInput 
                        style={style.input} 
                            maxLength={9}
                                placeholder={"CEP"}
                                    value={mask(dadosCadastro.endereco.cep, cepPattern)}
                                        onChangeText={(text) => 
                                            setDadosCadastro({...dadosCadastro,
                                                endereco:{...dadosCadastro.endereco, cep: unMask(text)}})}                    
                    />
                </View>
                <View style={style.buttonArea}>
                    <TouchableHighlight 
                        style={style.ok} 
                            onPress={() => validaDados()} 
                                underlayColor={'#DDDDDD'}
                    >
                        <Text style={style.textoButton}>Cadastrar</Text>
                    </TouchableHighlight> 

                    <TouchableHighlight 
                        style={style.cancel} 
                            onPress={() => confirmaCancelar()} 
                                underlayColor={'#DDDDDD'}
                    >
                        <Text style={style.textoButton}>Cancelar</Text>
                    </TouchableHighlight>                                  
                </View>            
            </View>
        </ScrollView>
    );
}

export default Form;