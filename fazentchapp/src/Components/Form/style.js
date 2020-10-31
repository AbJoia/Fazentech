import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

    container:{
        marginHorizontal: 20,
        marginTop: 20      
    },

    titulo: {
        fontSize: 20
    },

    input:{
        backgroundColor: '#BABD75',
        borderRadius: 3,
        marginBottom: 5,
        marginTop: 5
    },

    buttonArea:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textoButton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    },

    ok:{
        width: 150,
        height: 60,
        borderRadius: 3,
        backgroundColor: '#46C87C',
        justifyContent: "center",
        alignItems: "center"
    },

    cancel:{
        width: 150,
        height: 60,
        borderRadius: 3,
        backgroundColor: '#D63422',
        justifyContent: "center",
        alignItems: "center"
    }

})

export default style;