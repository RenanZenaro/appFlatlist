// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaProdutosScreen from './components/ListaProdutosScreen';
import { Title } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaProdutos'>
        <Stack.Screen name="ListaProdutos" component={ListaProdutosScreen}
          options={{ title: "Lista de Produtos" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;