import { createStackNavigator } from '@react-navigation/stack';
import FavoriteGames from '../Components/Favorites';

const Stack = createStackNavigator();

export default function FavoriteGamesStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="FavoriteGames" component={FavoriteGames} />
        </Stack.Navigator>
    );
}