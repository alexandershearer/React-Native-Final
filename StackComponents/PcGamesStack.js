import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../Components/Details';
import PcGames from '../Components/PcGames';

const Stack = createStackNavigator();

export default function PcGamesStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="PcGames" component={PcGames} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}