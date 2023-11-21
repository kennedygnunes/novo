import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CalcIR = () => {
  const [rendimento, setRendimento] = useState('');
  const [classification, setClassification] = useState('');

  const CalcIR = () => {
    const income = parseFloat(rendimento);

    if (income < 22847.76) {
      setClassification("Não há dedução fiscal.");
    } else if (income >= 22847.77 && income < 33919.80) {
      setClassification(`A sua Alíquota é de 7.5%. Você deve pagar ${income * 0.075} reais.`);
    } else if (income >= 33919.81 && income < 45012.60) {
      setClassification(`A sua Alíquota é de 15%. Você deve pagar ${income * 0.15} reais.`);
    } else if (income >= 45012.61 && income < 55976.16) {
      setClassification(`A sua Alíquota é de 22,5%. Você deve pagar ${income * 0.225} reais.`);
    } else {
      setClassification(`A sua Alíquota é de 27,5%. Você deve pagar ${income * 0.275} reais.`);
    }
  };

  return (
    <View>
      <Text>Informe o rendimento:</Text>
      <TextInput
        value={rendimento}
        onChangeText={(text) => setRendimento(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular IR" onPress={CalcIR} />

      <Text>Resultado:</Text>
      <Text>{classification}</Text>
    </View>
  );
};

export default CalcIR;

