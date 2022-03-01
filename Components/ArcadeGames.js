import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TouchButton from './TouchButton';
import data from '../game_list.json'


export default function ArcadeGames({ navigation }) {
    return (
        <SafeAreaView style={styles.view}>

            <View>
                <Text style={styles.header}>
                    Other Games
                </Text>
            </View>

            <FlatList
                style={styles.list}
                data={data.filter(game => game.platform.includes("Dreamcast") || game.platform.includes("Nintendo 64") || game.platform.includes("GameCube") || game.platform.includes("Wii U") || game.platform.includes("Switch") || game.platform.includes("Game Boy Advance") || game.platform.includes("Wii") || game.platform.includes("3DS"))}
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        textDecorationLine: "underline",
        color: "#fff"
    },

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
        backgroundColor: "#000"
    },

    list: {
        color: "#000",
        flex: 1,
        width: "100%",
    },
});