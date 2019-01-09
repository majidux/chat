import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TextInput,KeyboardAvoidingView} from 'react-native';
import datachats from './DataChats';


export default class LeftBody extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filteredData: []
        }
    }
    
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=20')
            .then(response => response.json())
            .then(data => {
                this.data = data.results;
                this.setState({
                    filteredData: this.data
                });
            })
            .catch(error => alert('Cannot Find Server'));
    }
    
    searchFilter = text => {
        let result = this.data.filter(contact => `${contact.name.first.toUpperCase()} ${contact.name.last.toUpperCase()}`.contains(text.toUpperCase()));
        this.setState({
            filteredData: result
        });
    };
    
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
                    <TextInput
                        style={{marginLeft: 10, opacity: 1}}
                        onChangeText={this.searchFilter}
                        placeholder={'Search'}
                    ></TextInput>
                </View>
                <View style={styles.flatStyleOutside}>
                    <FlatList
                        data={this.state.filteredData}
                        keyExtractor={(item) => item.email}
                        renderItem={({item}) =>
                            <View style={styles.flatStyleInside}>
                                <View style={styles.profilePicName}>
                                    <Image
                                        source={{uri: item.picture.large}}
                                        style={{width: 50, height: 50,borderRadius:50}}
                                    />
                                    <View style={{justifyContent: 'center', marginLeft: 5}}>
                                        <Text>{item.name.first}</Text>
                                        <Text style={{color: 'black', opacity: .3, fontSize: 11}}>{item.name.last}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    alignItems: 'flex-end',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                    minHeight: 40
                                }}>
                                    <View>
                                        <Text>{item.date}</Text>
                                    </View>
                                    {item.registered.age >10 &&
                                    <View style={{backgroundColor: 'red', paddingHorizontal: 5, borderRadius: 50}}>
                                        <Text style={{color: 'white', fontSize: 12,}}>{item.registered.age}</Text>
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
        // flex: 1,
        height:100,
        // backgroundColor: 'red',
        justifyContent: 'center'
    },
    searchTitle: {
        // flex: 1,
        // height:100,
        // backgroundColor: 'blue',
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d5e2',
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
        paddingHorizontal: 15,
        marginVertical: 7,
        justifyContent: 'space-between',
        minHeight: 80,
        maxHeight: 80,
        alignItems: 'center',
        borderRadius: 3
    },
    profilePicName: {
        flexDirection: 'row',
        flex: 2
    }
    
});