import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class FavoritesScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.view}>
                <FlatList style={styles.list} >

                </FlatList>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(FavoritesScreen);