import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Deletar(){
    return(
        <View style = {styles.View}>
            <Text style = {styles.TextTitulo}>DELETAR</Text>
            <View>
                <Text style = {styles.TextInfo}>Delete um usuário aqui.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    View: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#280936',
    },

    TextTitulo: {
        flex: 1,
        color: 'white',
        fontSize: '25px',
        marginTop: '10px',
        fontWeight: 'bold',
    },

    TextInfo: {
        flex: 1,
        color: '#ae00ff',
        fontSize: '25px',
        marginBottom: '500px',
    }

});