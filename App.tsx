import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/RootStackParamList';
import StartScreen from './src/screens/Start';
import OnboardingScreen from './src/screens/Onboarding';
import SelectScreen from './src/screens/Select';
import LocalScreen from './src/screens/Local';
import TravelScreen from './src/screens/Travel';
import ItemsScreen from './src/screens/Items';
import MainScreen from './src/screens/Main';
import { RecoilRoot } from 'recoil';
import { loadAsync } from 'expo-font';


const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {
    async function fetchFont(){
        await loadAsync({
            "NotoSansKR-Bold" : require('./src/assets/fonts/NotoSansKR-Bold.otf'),
            "NotoSansKR-Medium" : require('./src/assets/fonts/NotoSansKR-Medium.otf'),
            "NotoSansKR-Regular" : require('./src/assets/fonts/NotoSansKR-Regular.otf'),
            "Inter-Medium" : require('./src/assets/fonts/Inter-Medium.ttf')
        });
    }
    fetchFont();
}, []);
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
              <RootStack.Screen name="Main" component={MainScreen}/>
          </RootStack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;