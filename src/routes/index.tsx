

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Form } from '../screens/Form';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (       
      <Stack.Navigator
      initialRouteName='Home' 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Form' component={Form}/>
      </Stack.Navigator> 
     
  );
}