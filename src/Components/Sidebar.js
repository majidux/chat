import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import dataProfile from './DataProfile';

let [data] = dataProfile;
export default class Sidebar extends Component {
    render() {
        
        return (
            <View style={styles.sideBar}>
                <View style={styles.profileView}>
                    <View>
                        <Image
                            source={data.userImage}
                        />
                    </View>
                    <View style={styles.profilePic}>
                        <Text style={{color:'black',fontSize:15}}>{data.userName}</Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../Assets/image/down-arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity>
                        <View style={styles.menus}>
                            <Text style={styles.textStyle}>PROPERTIES</Text>
                            <Image
                                source={require('../Assets/image/home.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.menus,{opacity:null}]}>
                            <Text style={[styles.textStyle, {color: '#2a8bf2', opacity: null}]}>CHAT</Text>
                            <Image
                                source={require('../Assets/image/conversation.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.menus}>
                            <Text style={styles.textStyle}>CALENDAR</Text>
                            <Image
                                source={require('../Assets/image/event.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.menus}>
                            <Text style={styles.textStyle}>OFFERS</Text>
                            <Image
                                source={require('../Assets/image/tag.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.menus}>
                            <Text style={styles.textStyle}>DOCUMENTS</Text>
                            <Image
                                source={require('../Assets/image/file.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.menus}>
                            <Text style={styles.textStyle}>SETTINGS</Text>
                            <Image
                                source={require('../Assets/image/settings.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideBar: {
        flex: 1,
        backgroundColor: '#dbdcf8',
        alignItems: 'center',
        paddingTop: 50,
        justifyContent: 'flex-start',
    },
    profilePic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileView: {
        // backgroundColor:'green'
        flex: 1
    },
    menus: {
        // backgroundColor:'blue',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: 40,
        minWidth: 180,
        opacity: .5,
        paddingTop: 50,
        
    },
    menu: {
        // backgroundColor:'green',
        flex: 4,
    },
    textStyle: {
        color: 'black',
        opacity: .5,
        marginLeft: 18,
        fontWeight: 'bold'
    }
});