import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

export default class Body extends Component {
    render() {
        return (
            <View style={styles.className}>
                <LeftBody/>
                <RightBody/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 4,
        flexDirection: 'row'
    }
});