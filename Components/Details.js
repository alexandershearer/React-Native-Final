import React from "react";
import { Text, View, Button, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addFavorite } from "../Actions/FavoriteAction";

function DetailsScreen({ navigation, route }) {
    const { item } = route.params;
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
            }}>

                <TouchableHighlight
                    style={{
                        borderWidth: 2,
                        padding: 5,
                        borderRadius: "30%"
                    }}
                    color="#000000"
                    title="Back"
                    onPress={() => navigation.goBack()}
                >
                    <Text>Back</Text>

                </TouchableHighlight>

                <TouchableHighlight
                    style={{
                        borderWidth: 2,
                        padding: 5,
                        borderRadius: "50%"
                    }}
                    title="❤️"
                    onPress={() => dispatch(addFavorite(item))}
                >
                    <Text>❤️</Text>
                </TouchableHighlight>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>
                    {item.name}
                </Text>
                <Text style={styles.header}>
                    Release Date: {item.release_date}
                </Text>
                <Text style={styles.header}>
                    Platform: {item.platform}
                </Text>
                <Image
                    style={styles.imgView}
                    source={{
                        uri: item.image
                    }}
                />
                <Text style={styles.subHeader}>
                    Rating: {item.rating}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
    },

    header: {
        fontSize: 20,
    },

    subHeader: {
        fontSize: 18,
        margin: 10,
    },

    imgView: {
        width: 200,
        height: 150,
        alignItems: "center",
        margin: 10,
    },


    description: {
        fontSize: 16,
        lineHeight: 28,
        paddingBottom: 20,
        fontFamily: "Futura",
        textAlign: "center",
        color: "#000",
    }
});

export default DetailsScreen;