import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import resultReducer from '../services/reducer';
import thunk from 'redux-thunk';

const store = createStore(resultReducer ,applyMiddleware(thunk));


export default class Home extends Component {
    
    render() {
        return (
            <Provider store={store}>
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
