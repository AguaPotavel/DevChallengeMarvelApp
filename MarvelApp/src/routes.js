import Home from './Pages/Home';
import Hero from './Pages/Hero';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createAppContainer, createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default Routes => {
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Home" component={Home}/>
            <Stack.Screen name = "Hero" component={Hero}/>
        </Stack.Navigator>
    </NavigationContainer>); 
};