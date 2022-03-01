import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import TouchButton from './TouchButton';

export default function FavoriteGames({ navigation }) {

    const favoriteList = useSelector(state => state.favoritesList)
    console.log(favoriteList)

    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.title}>My Favorites</Text>
            <FlatList
                data={favoriteList}
                style={styles.list}
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
    title: {
        fontSize: 30,
        textDecorationLine: 'underline',
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