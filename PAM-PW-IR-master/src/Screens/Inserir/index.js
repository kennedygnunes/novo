import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import CalcIR from './script';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      cpf: '',
      rendimento: '',
    };
  }

  NomeInserido = (text) => {
    this.setState({ nome: text });
  }

  CpfInserido = (text) => {
    this.setState({ cpf: text });
  }

  RendimentoInserido = (text) => {
    this.setState({ rendimento: text });
  }

  CalcularIR = () => {
    
    console.log('Nome:', this.state.nome);
    console.log('CPF:', this.state.cpf);
    console.log('Rendimento:', this.state.rendimento);
  }

  render() {
    return (
      <View style={styles.View}>
        <Text style = {styles.TextSimple}>Nome:</Text>
        <TextInput 
          style={styles.input}
          onChangeText={this.NomeInserido}
          value={this.state.nome}
        />

        <Text style = {styles.TextSimple}>CPF:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.CpfInserido}
          value={this.state.cpf}
        />

        <Text style = {styles.TextSimple}>Rendimento:</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.RendimentoInserido}
          value={this.state.rendimento}
          keyboardType="numeric" 
        />

        <TouchableOpacity 
        style = {styles.Button} 
        Title = 'Enviar'
        onPress={CalcIR()}
        >
        <Text style = {styles.ButtonText}
        onPress = {CalcIR()}
        >
        ENVIAR
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    padding: 20,
    backgroundColor: '#280936',
  },
  input: {
    height: 40,
    color: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },

  TextSimple: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  Button: {
    backgroundColor: '#ae00ff', // Defina a cor do botão aqui
    padding: 10,
    borderRadius: 5, // Opcional: para arredondar os cantos
  },
  ButtonText: {
    color: 'white', // Cor do texto do botão
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Formulario;
