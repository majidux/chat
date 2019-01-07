import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.home}>
                <Sidebar/>
                <Body/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'row'
    }
});