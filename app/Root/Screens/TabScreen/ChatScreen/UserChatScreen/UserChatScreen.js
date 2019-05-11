import {Image, Text, TouchableOpacity, View, TextInput, FlatList, StyleSheet} from "react-native";
import React, {Component} from "react";
import styles from './UserChatScreenStyle'
import search from "../../../../../assets/ic_magnify_grey600_48dp.png";
import backButton from '../../../../../assets/ic_arrow_left_black_48dp.png'
import userPic from '../../../../../assets/tlogo.png'
import phone from '../../../../../assets/ic_phone_grey600_48dp.png'
import video from '../../../../../assets/ic_video_outline_grey600_48dp.png'
import options from '../../../../../assets/ic_dots_vertical_grey600_48dp.png'
import camera from '../../../../../assets/ic_camera_black_48dp.png'
import emoji_keyboard from '../../../../../assets/emoji_thumb.jpg'

class UserChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
            data: [
                {id: 1, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit amet"},
                {id: 2, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet"},
                {id: 3, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit a met"},
                {id: 4, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit a met"},
                {id: 5, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met"},
                {id: 6, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met"},
                {id: 7, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit a met"},
                {id: 8, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit a met"},
                {id: 9, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit a met"},
            ]
        };

    }


    render() {
        return (
            <View style={styles.container}>

                {/*toolbar*/}
                <View style={styles.toolbarStyle}>
                    <Image source={backButton} style={styles.backButton}/>
                    <Image source={userPic} style={styles.userpic}/>
                    <View style={{width: '35%'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000'}}
                              numberOfLines={1}>{'Izzy Family Care'}</Text>
                        <Text
                            numberOfLines={1}
                            style={{
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: '#c8c8c8'
                            }}>{'Typically reply instantly'}</Text>
                    </View>
                    <View style={{flexDirection: 'row', position: 'absolute', right: 0}}>
                        <Image source={video} style={styles.toolbarIcon}/>
                        <Image source={phone} style={styles.toolbarIcon}/>
                        <Image source={options} style={styles.toolbarIcon}/>
                    </View>


                </View>
                <View style={{backgroundColor: '#c8c8c8', height: 0.5, width: '100%'}}/>

                <View style={styles2.container}>
                    <FlatList style={styles2.list}
                              data={this.state.data}
                              keyExtractor={(item) => {
                                  return item.id;
                              }}
                              renderItem={(message) => {
                                  console.log(item);
                                  const item = message.item;
                                  let inMessage = item.type === 'in';
                                  let itemStyle = inMessage ? styles2.itemIn : styles2.itemOut;
                                  return (
                                      <View style={[inMessage ? styles2.item : styles2.item2, itemStyle]}>

                                          <View style={[styles2.balloon]}>

                                              <Text style={styles2.time}>
                                                  {item.date}
                                              </Text>
                                              <Text style={inMessage ? {color:'#000000',fontWeight: 'bold',}:{color:'#ffffff',fontWeight: 'bold',}}>{item.message}</Text>
                                          </View>

                                      </View>
                                  )
                              }}/>
                    <View
                        style={styles.searchView}>
                        <View style={styles.searchContainer}>

                            <TextInput style={styles.searchText}
                            placeholder={"Type here..."}/>
                            <TouchableOpacity>
                                <Image source={emoji_keyboard} style={styles.imageSearch}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                alert("test")
                            }} style={{marginTop: 5, marginRight: 20}}>

                            <Image source={camera} style={styles.imageCamera}/>

                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}


const mapActionCreators = {};


const mapStateToProps = state => {

    return {
        isLoading: state.locals.loading,

    };
};
//export default connect(mapStateToProps, mapActionCreators)(UserContactScreen)
export default UserChatScreen;
const styles2 = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        paddingHorizontal: 17,
        marginBottom: 70
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 10,
        padding: 5,
    },
    btnSend: {
        backgroundColor: "#00BFFF",
        width: 40,
        height: 40,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconSend: {
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    inputs: {
        height: 40,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    balloon: {
        maxWidth: 250,
        padding: 5,
        borderRadius: 20,
    },
    itemIn: {
        alignSelf: 'flex-start'
    },
    itemOut: {
        alignSelf: 'flex-end',
        backgroundColor: '#3D97FC',
        color: '#ffffff'
    },
    time: {
        margin: 5,
        fontSize: 12,
        color: "#c8c8c8",
    },
    item: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        borderBottomEndRadius: 25,
        borderBottomRightRadius: 25,
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
        padding: 10,
        shadowColor: '#d0d0d0',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 2,
        marginLeft: 2,
        marginRight: 2,

    }, item2: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        borderBottomLeftRadius: 25,
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
        padding: 10,
        shadowColor: '#d0d0d0',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 2,
        marginLeft: 2,
        marginRight: 2,

    },
});
