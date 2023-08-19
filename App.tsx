import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
enableScreens();

// Define the Home and Settings screens
const HomeScreen = () => <View><Text>Home Screen</Text></View>;
const SettingsScreen = () => <View><Text>Settings Screen</Text></View>;

// Create the drawer navigator
const Drawer = createDrawerNavigator();

// Define the App component
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
