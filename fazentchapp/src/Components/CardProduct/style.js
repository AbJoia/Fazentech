import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    
    container:{
        backgroundColor: '#BABD75', 
        marginTop: 20,
        marginHorizontal: 20,              
        height: 180,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"                            
    },

    imgArea:{
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#cccc',
        width: 150,
        height: 150        
    },

    qtd:{
        width: 200,
        height: 40,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: '#fff',        
        justifyContent:"space-between",
        alignItems: "center",
        flexDirection:'row',
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    areaPress: {
        width: 20
    },

    button:{
        backgroundColor: '#46C87C',
        marginTop: 10,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginRight: 10
    },

    texto:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },

    textoqtd:{
        fontSize: 30,
        color: '#000',       
        fontWeight: 'bold'
    }
    
})

export default style;