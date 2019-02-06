import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TextInput,TouchableOpacity} from 'react-native';
import dataSendMessage from './DataSendMessage';

export default class RightBody extends Component {
    
    constructor(props){
        super(props);
        this.state={
            items:[],
            inputText:''
        }
    }

    handleChange = text => {
        this.setState({inputText:text})
    };
    
    
    sendButton = () => {
        if(!this.state.inputText.length){
            return;
        }
        else{
            const newItem = {
                text:this.state.inputText,
                isCompleted:false
            };
            this.setState(prev => ({...prev,items:[...prev.items,newItem]}),()=>this.setState({inputText:''}))
        }
    };
    
    render() {
        const EmptyItem = () =>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25, opacity: .5}}>There is No Message</Text>
            </View>;
        return (
            <View style={styles.rightBody}>
                <View style={styles.messageStatus}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <View style={{paddingHorizontal: 5}}><Text>Status: Sale</Text></View>
                        <View style={{paddingRight: 35}}>
                            <Image
                                source={require('../Assets/image/down.png')}
                            />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/image/bell.png')}
                        />
                    </View>
                </View>
                <View style={styles.messageTitle}>
                    <View><Text style={{color: 'black', fontSize: 20}}>Gold Coast</Text></View>
                    <View><Text style={{fontSize: 10, fontWeight: 'bold'}}>From : Hali</Text></View>
                </View>
                <View style={styles.messageBody}>
                    <FlatList
                        data={this.state.items}
                        keyExtractor={(item) => item}
                        ListEmptyComponent={EmptyItem}
                        renderItem={({item}) =>
                            <View style={styles.sendReceive}>
                                
                                {/*<View style={styles.senderMessage}>*/}
                                    {/*<View style={{alignItems: 'center'}}>*/}
                                        {/*<Image*/}
                                            {/*source={require('../Assets/image/hali.png')}*/}
                                            {/*style={{width: 50, height: 50}}*/}
                                        {/*/>*/}
                                        {/*<Text style={{opacity: .5, fontSize: 12}}>{item.date}</Text>*/}
                                    {/*</View>*/}
                                    {/*<View style={styles.receiver}>*/}
                                        {/*<Text>{item.text}</Text>*/}
                                    {/*</View>*/}
                                {/*</View>*/}
                                
                                
                                <View style={styles.receiveMessage}>
                                    <View style={styles.sender}>
                                        <Text style={{color: 'white'}}>{item.text}</Text>
                                        
                                    </View>
                                    <View style={{flexDirection: 'row-reverse'}}>
                                        <Text style={{opacity: .5, fontSize: 12}}>{item.date}</Text>
                                        <Image
                                            source={item.seen}
                                        />
                                    </View>
                                </View>
                                
                            </View>
                        }
                    />
                </View>
                <View style={styles.textArea}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.twoButton}><Text style={{fontSize: 11}}>REQUEST VISIT</Text></View>
                        <View style={[styles.twoButton, {marginLeft: 10}]}><Text style={{fontSize: 11}}>MAKE
                            OFFER</Text></View>
                    </View>
                    <View style={styles.typingMessage}>
                        <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                            <Image
                                source={require('../Assets/image/emoji.png')}
                            />
                            <TextInput value={this.state.inputText} onChangeText={this.handleChange.bind(this)} style={{fontSize: 12, opacity: .5, marginLeft: 10}} placeholder={'Type a message ...'}></TextInput>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{marginRight: 10}}>
                                <Image
                                    source={require('../Assets/image/clip.png')}
                                />
                            </View>
                            <TouchableOpacity onPress={() => this.sendButton()}>
                            <View style={styles.sendButton}>
                                <Image
                                    source={require('../Assets/image/send.png')}
                                />
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rightBody: {
        flex: 1.5,
        backgroundColor: '#f4f4fc'
    },
    messageStatus: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 40,
        marginVertical: 36,
        
    },
    messageTitle: {
        marginLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#d1d5e2',
        opacity: .5,
        
    },
    messageBody: {
        marginHorizontal: 20,
        marginTop: 15,
        height: 500
    },
    textArea: {},
    senderMessage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sendReceive: {
        // backgroundColor: 'green'
    },
    receiveMessage: {
        marginTop: 20,
        alignItems: 'flex-end'
    },
    receiver: {
        backgroundColor: '#eae8ed',
        borderRadius: 30,
        padding: 13,
        marginLeft: 10,
    },
    sender: {
        backgroundColor: '#2a8bf2',
        borderRadius: 30,
        padding: 13,
        marginLeft: 10,
        
        
    },
    twoButton: {
        padding: 8,
        borderRadius: 25,
        backgroundColor: 'white'
    },
    typingMessage: {
        elevation: 1,
        backgroundColor: 'white',
        marginTop: 8,
        marginRight: 25,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 15,
    },
    sendButton: {
        backgroundColor: '#2d8cf2',
        padding: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#dadadf',
        elevation: 10,
    }
    
});
