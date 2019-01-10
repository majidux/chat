import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TextInput, TouchableHighlight, ActivityIndicator} from 'react-native';
import datachats from './DataChats';


export default class LeftBody extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            pressStatus: false,
            sendAPIRequest: '',
            loading:false,
            page:0,
            data:[]
        };
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData =() => fetch(`https://randomuser.me/api?results=15`)
        
        .then(response => response.json())
        .then(data => {
            this.data = data.results;
            this.setState({
                filteredData: this.data,
                loading:true
            });
        })
        .catch(error => alert('Cannot Find Server'));
    
    searchFilter = text => {
        let result = this.data.filter(contact => `${contact.name.first.toUpperCase()} ${contact.name.last.toUpperCase()}`.contains(text.toUpperCase()));
        this.setState({
            filteredData: result
        });
    };
    
    
    _onHideUnderlay() {
        this.setState({pressStatus: false});
    }
    
    _onShowUnderlay() {
        this.setState({pressStatus: true});
    }
    
    // loadingFooter = () => {
    //     if (this.state.refreshing) {
    //         return <ActivityIndicator/>
    //     } else {
    //         return null
    //     }
    // };
    
    // fetchMore = () => {
    //     if (this.state.refreshing){
    //         return null
    //     }
    //     this.setState(
    //         (prevState) => {
    //             return { refreshing: true,pageNum:prevState.pageNum + 1};
    //         },
    //         ()=> {
    //             this.sendAPIRequest(null , true);
    //         }
    //     );
    // };
    
    handleEnd = () => {
        this.setState(state => ({ page: state.page + 1 }), () => this.fetchData());
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
                        keyExtractor={(item) => item.login.username}
                        extraData={this.state.pressStatus}
                        onEndReached={() => this.handleEnd()}
                        onEndReachedThreshold={0}
                        ListFooterComponent={() =>
                            this.state.loading
                                ? null
                                : <ActivityIndicator size="large" animating />}
                        refreshing={this.state.refreshing}
                        renderItem={({item}) =>
                            <TouchableHighlight
                                onPress={() => {
                                }}
                                activeOpacity={0.9}
                                style={this.state.pressStatus ? styles.flatStyleInside1 : styles.flatStyleInside2}
                                onHideUnderlay={this._onHideUnderlay.bind(this)}
                                onShowUnderlay={this._onShowUnderlay.bind(this)}
                            >
                                {/*{this.pressStatus === item.email}*/}
                                <View style={styles.flatStyleInside3}>
                                    
                                    <View style={styles.profilePicName}>
                                        <Image
                                            source={{uri: item.picture.large}}
                                            style={{width: 50, height: 50, borderRadius: 50}}
                                        />
                                        <View style={{justifyContent: 'center', marginLeft: 5}}>
                                            <Text>{item.name.first}</Text>
                                            <Text style={{
                                                color: 'black',
                                                opacity: .3,
                                                fontSize: 11
                                            }}>{item.location.timezone.description}</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        alignItems: 'flex-end',
                                        justifyContent: 'space-between',
                                        flex: 1,
                                        minHeight: 40
                                    }}>
                                        <View>
                                            <Text>{item.gender}</Text>
                                        </View>
                                        {item.dob.age > 55 &&
                                        <View style={{backgroundColor: 'red', paddingHorizontal: 5, borderRadius: 50}}>
                                            <Text style={{color: 'white', fontSize: 12,}}>{item.dob.age}</Text>
                                        </View>
                                        }
                                    </View>
                                </View>
                            </TouchableHighlight>
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
        height: 100,
        justifyContent: 'center'
    },
    searchTitle: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d5e2',
        opacity: .5
    },
    flatStyleOutside: {
        flex: 10,
        marginTop: 15,
        paddingHorizontal: 20,
    },
    flatStyleInside1: {
        backgroundColor: 'white',
        flexDirection: 'row',
        // paddingHorizontal: 15,
        minWidth: 350,
        marginVertical: 7,
        justifyContent: 'space-between',
        minHeight: 80,
        alignItems: 'center',
        borderRadius: 3
    },
    flatStyleInside2: {
        backgroundColor: 'white',
        flexDirection: 'row',
        // paddingHorizontal: 15,
        marginVertical: 7,
        justifyContent: 'space-between',
        minHeight: 80,
        alignItems: 'center',
        borderRadius: 3,
        minWidth: 350,
        
    },
    flatStyleInside3: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: 15,
        // marginVertical: 7,
        justifyContent: 'space-between',
        minHeight: 80,
        alignItems: 'center',
        borderRadius: 3,
        minWidth: 350,
        
    },
    profilePicName: {
        flexDirection: 'row',
        flex: 2
    }
    
});