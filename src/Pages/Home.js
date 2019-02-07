import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import resultReducer from '../services/reducer';

export default class Home extends Component {
    store = createStore(resultReducer);
    
    render() {
        return (
            <Provider store={this.store}>
                <View style={styles.home}>
                    <Sidebar/>
                    <Body/>
                </View>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'row'
    }
});
