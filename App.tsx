import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/RootStackParamList';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './src/screens/Start';
import OnboardingScreen from './src/screens/Onboarding';
import SelectScreen from './src/screens/Select';
import LocalScreen from './src/screens/Local';
import TravelScreen from './src/screens/Travel';
import ItemsScreen from './src/screens/Items';
import { RecoilRoot } from 'recoil';

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
              <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
              <RootStack.Screen name="Start" component={StartScreen}/>
              <RootStack.Screen name="Select" component={SelectScreen}/>
              <RootStack.Screen name="Local" component={LocalScreen}/>
              <RootStack.Screen name="Travel" component={TravelScreen}/>
              <RootStack.Screen name="Items" component={ItemsScreen}/>
          </RootStack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;