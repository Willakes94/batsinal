import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { Form } from '../Form/index';


export function Home() {    
    const {navigate} = useNavigation()   
    
  return (
    <View style={styles.container}>       
        <Image source={logo} style={styles.logo}/>
        <TouchableOpacity onPress={() => navigate('Form') } style={styles.btn}>
            <Text style={styles.txtbtn}>Ativar Bat Sinal</Text>
        </TouchableOpacity>
      <StatusBar style={"auto"} />
    </View>
  );
}