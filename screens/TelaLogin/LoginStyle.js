import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backDiv: {
        width: 250,
        padding: 10,
        backgroundColor: '#C6E1F6',
        borderRadius: 10
    },
    textCadastro:{
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 25
    },
    input: {
        width: 225,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#226BBE',
        marginBottom: 10
      },
    btnCadastro:{
        width: 225,
        height: 40,
        backgroundColor:'#226BBE',
        color:'#fff',
        textAlign:'center',
        paddingTop: 10,
        borderRadius: 10,
        fontWeight: '600'
    },
    btnParaLogin:{
        paddingLeft: 140,
        paddingRight: 10,
        marginBottom: 10,
    },
    login: {
        color: '#80807A',
        borderBottomWidth: 2,
        borderBottomColor: '#80807A'
    }
});

export default styles;