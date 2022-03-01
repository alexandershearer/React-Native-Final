import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducers from './Reducers'

import PcGamesStack from './StackComponents/PcGamesStack';
import ConsoleGamesStack from './StackComponents/ConsoleGamesStack';
import ArcadeGamesStack from './StackComponents/ArcadeGamesStack';
import FavoriteGamesStack from './StackComponents/FavoriteGamesStack';


const Tab = createBottomTabNavigator();
const store = createStore(allReducers);



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#000' }, headerShown: false }} >
          <Tab.Screen name="PC" component={PcGamesStack} />
          <Tab.Screen name="Xbox/PS" component={ConsoleGamesStack} />
          <Tab.Screen name="Other" component={ArcadeGamesStack} />
          {/* Use redux to update favorite icon */}
          <Tab.Screen name="Favorites" component={FavoriteGamesStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

