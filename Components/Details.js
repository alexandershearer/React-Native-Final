import React from "react";
import { Text, View, Button, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";

function DetailsScreen({ navigation, route }) {
    const { item } = route.params;


    return (
        <SafeAreaView style={styles.container}>
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
                    source={item.image}
                />
                <Text style={styles.subHeader}>
                    Rating: {item.rating}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>

                <Button
                    color="#000"
                    title="Return"
                    onPress={() => navigation.goBack()}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

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
    },

    text: {
        marginBottom: 10,
        fontFamily: "Futura",
        textAlign: "center",
        color: "#000",
    },

    description: {
        lineHeight: 28,
    }
});

export default DetailsScreen;