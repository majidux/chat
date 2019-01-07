import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import dataChats from './DataChats';

export default class LeftBody extends Component {
    render() {
        return (
            <View style={styles.bodyLeft}>
                <View style={styles.chatTitle}>
                    <Text style={{fontSize: 25, color: 'black'}}>Chat</Text>
                </View>
                <View style={styles.searchTitle}>
                    <Image
                        source={require('../Assets/image/search.png')}
                    />
                    <Text style={{marginLeft: 10, opacity: 1}}>Search</Text>
                </View>
                <View style={styles.flatStyleOutside}>
                    <FlatList
                        data={dataChats}
                        keyExtractor={(item) => item.name}
                        renderItem={({item}) =>
                            <View style={styles.flatStyleInside}>
                                <View style={styles.profilePicName}>
                                    <Image
                                        source={item.image}
                                        style={{width: 50, height: 50}}
                                    />
                                    <View style={{justifyContent:'center',marginLeft:5}}>
                                        <Text>{item.name}</Text>
                                        <Text style={{color:'black',opacity:.3,fontSize:11}}>{item.message}</Text>
                                    </View>
                                </View>
                                <View style={{alignItems:'flex-end',justifyContent:'space-between',flex:1,minHeight: 40}}>
                                    <View>
                                        <Text>{item.date}</Text>
                                    </View>
                                    {item.howMany &&
                                    <View style={{backgroundColor: 'red', paddingHorizontal: 5, borderRadius: 50}}>
                                        <Text style={{color: 'white', fontSize: 12,}}>{item.howMany}</Text>
                                    </View>
                                    }
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyLeft: {
        flex: 1,
        backgroundColor: '#f3f3fd',
        paddingVertical: 40,
        paddingLeft: 30
    },
    chatTitle: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center'
    },
    searchTitle: {
        flex: 1,
        // backgroundColor: 'blue',
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor:'#d1d5e2',
        opacity: .5
    },
    flatStyleOutside: {
        flex: 10,
        // backgroundColor: 'green',
        marginTop: 15,
        paddingHorizontal: 20,
    },
    flatStyleInside: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal:15,
        marginVertical:7,
        justifyContent: 'space-between',
        minHeight: 80,
        maxHeight: 80,
        alignItems: 'center',
        borderRadius: 3
    },
    profilePicName: {
        flexDirection: 'row',
        flex:2
    }
    
});