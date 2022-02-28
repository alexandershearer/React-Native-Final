import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteGames from './Components/Favorites';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import PcGamesStack from './StackComponents/PcGamesStack';
import ConsoleGamesStack from './StackComponents/ConsoleGamesStack';
import ArcadeGamesStack from './StackComponents/ArcadeGamesStack';
import FavoritesReducer from './Reducers/FavoritesReducer';


const Tab = createBottomTabNavigator();
const store = createStore(FavoritesReducer);



export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#000' }, headerShown: false }} >
          <Tab.Screen name="PC" component={PcGamesStack} />
          <Tab.Screen name="Console" component={ConsoleGamesStack} />
          <Tab.Screen name="Other" component={ArcadeGamesStack} />
          {/* Use redux to update favorite icon */}
          <Tab.Screen name="Favorites" component={FavoriteGames} options={{ tabBarBadge: 5 }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

