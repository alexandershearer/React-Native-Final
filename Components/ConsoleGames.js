import { FlatList, StyleSheet, Text, View } from 'react-native';
import TouchButton from './TouchButton';
import data from '../game_list.json'


export default function ConsoleGames({ navigation }) {
    return (
        <View style={styles.view}>

            <FlatList
                style={styles.list}
                data={data.filter(game => game.platform.includes("Xbox") || game.platform.includes("Playstation"))}
                renderItem={({ item, index }) => {

                    return (
                        <TouchButton
                            title={item.name}
                            showDetails={() => navigation.navigate("Details", { item })}
                        />
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        width: "100%",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    list: {
        color: "#000",
        flex: 1,
        width: "100%",
    },
});