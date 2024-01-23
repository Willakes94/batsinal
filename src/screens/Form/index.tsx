import React from 'react';
import { TextInput, TouchableOpacity, Text, Alert, View } from 'react-native';

import { styles } from './styles';
import { HeaderForm } from '../../components/HeaderForm';


export function Form() {
    
  return (
    <>
    <HeaderForm />
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Nome completo'
      keyboardType='default'/>
       <TextInput 
      style={styles.input}
      placeholder='Email'
      keyboardType='email-address'/>
      <TextInput 
      style={styles.input}
      placeholder='Telefone'
      keyboardType='phone-pad'/>
       <TextInput 
      style={styles.input}
      placeholder='Localização'
      keyboardType='default'/>
      <TextInput
      style={styles.input}
       multiline
       numberOfLines={4}
       maxLength={40}
       placeholder='Observação'
      />
      <TouchableOpacity onPress={()=> Alert.alert('Formulário enviado com sucessso')}
      style={styles.btnSend}
      >
        <Text style={styles.txtbtn}>Enviar formulário</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}