import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import React, { useState} from 'react'; {}
import '../../../conexoesdemafia/api/post'
import _post from '../../API/post';



export default function App() {
  const [nome, setnome] = useState();
  const[id,setid]=useState();
  const[rendimento,setRendimento] = useState();
  const[cpf,setCpf] = useState();
 
  
  

  function CalcIR(){
    let produto = {
    
      id:id, 
      nome : nome,
      rendimento: rendimento,
      cpf: cpf,
     
    }
  _post(produto)
 
  }

 
  return (
    <View style={styles.container}>

     <Text  style={{marginTop:10}}>id</Text>
    <TextInput style = {{borderRadius:3, backgroundColor:'white'}} onChangeText={(texto)=> setid(texto)} ></TextInput>


    <Text  style={{marginTop:10}}>Nome</Text>
    <TextInput style = {{borderRadius:3, backgroundColor:'white'}} onChangeText={(texto)=> setnome(texto)} ></TextInput>

    <Text  style={{marginTop:10}}> rendimento</Text>
    <TextInput style = {{borderRadius:3, backgroundColor:'white'}} onChangeText={(texto)=> setRendimento(texto)} ></TextInput>

    <Text  style={{marginTop:10}}>cpf</Text>
    <TextInput style = {{borderRadius:3, backgroundColor:'white'}} onChangeText={(texto)=> setCpf(texto)} ></TextInput>

    


     
      <TouchableOpacity  style={{marginTop:20}} onPress={CalcIR} >
       
      
      <Text>
      cadastrar
 
      </Text>

      <Text>       </Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5df',
    alignItems: 'center',
    justifyContent: 'center',
  },
});