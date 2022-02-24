import { createStackNavigator } from '@react-navigation/stack';
import ArcadeGames from '../Components/ArcadeGames';

const Stack = createStackNavigator();

export default function ArcadeGamesStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ArcadeGames" component={ArcadeGames} />
        </Stack.Navigator>
    );
}