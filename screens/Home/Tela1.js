import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 150,
        backgroundColor: '#226BBE'
    },
    btnLogin: {
        width: 280,
        height: 40,
        backgroundColor: '#FFFFED',
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        color: '#000',
        fontWeight: "bold",
        fontSize: 14
    },
    btnCadastro: {
        color: '#fff',
        marginTop: 5,
        textDecorationLine: 'underline',
        width:150,
        textAlign:'center'
    },
    image: {
        width: 350,
        height: 250,
        marginBottom: 200
    }
});

export default styles;