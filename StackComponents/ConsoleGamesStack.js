import { createStackNavigator } from '@react-navigation/stack';
import ConsoleGames from '../Components/ConsoleGames';
import DetailsScreen from '../Components/Details';

const Stack = createStackNavigator();

export default function ConsoleGamesStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ConsoleGames" component={ConsoleGames} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}