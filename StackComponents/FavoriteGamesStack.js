import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../Components/Details';
import FavoriteGames from '../Components/Favorites';

const Stack = createStackNavigator();

export default function FavoriteGamesStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="FavoriteGames" component={FavoriteGames} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}