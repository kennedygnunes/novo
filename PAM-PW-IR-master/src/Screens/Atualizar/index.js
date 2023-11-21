import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Atualizar(){
  return(
      <View style = {styles.View}>
          <Text style = {styles.TextTitulo}>ATUALIZAR</Text>
          <View>
              <Text style = {styles.TextInfo}>Atualize informações de um usuário aqui.</Text>
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
      marginLeft: '20px',
      marginRight: '20px',
      marginBottom: '500px',
  }

});