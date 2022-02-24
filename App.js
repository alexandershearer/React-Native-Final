import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteGames from './Components/Favorites';
import PcGames from './Components/PcGames';
import ConsoleGames from './Components/ConsoleGames';
import ArcadeGames from './Components/ArcadeGames';
import PcGamesStack from './StackComponents/PcGamesStack';



const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#000' } }} >
        <Tab.Screen name="PC" component={PcGamesStack} />
        <Tab.Screen name="Console" component={ConsoleGames} />
        <Tab.Screen name="Other" component={ArcadeGames} />
        {/* Use redux to update favorite icon */}
        <Tab.Screen name="Favorites" component={FavoriteGames} options={{ tabBarBadge: 5 }} />
      </Tab.Navigator>
    </NavigationContainer>
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

