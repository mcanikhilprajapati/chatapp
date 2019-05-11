import {Image, Text, TouchableOpacity, View, TextInput, FlatList, StyleSheet, ScrollView} from "react-native";
import React, {Component} from "react";
import styles from './UserProfileScreenStyle'
import search from "../../../../assets/ic_magnify_grey600_48dp.png";
import backButton from '../../../../assets/ic_arrow_left_black_48dp.png'
import userPic from '../../../../assets/tlogo.png'
import phone from '../../../../assets/ic_phone_grey600_48dp.png'
import video from '../../../../assets/ic_video_outline_grey600_48dp.png'
import setting from '../../../../assets/ic_settings_black_48dp.png'
import camera from '../../../../assets/ic_camera_black_48dp.png'
import emoji_keyboard from '../../../../assets/emoji_thumb.jpg'
import SceneView from "react-navigation/src/views/SceneView";

class UserProfileScreenNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
            data: [
                {id: 1, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit amet"},
                {id: 2, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet"},
                {id: 3, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit a met"},
                {id: 4, date: "9:10 am", type: 'in', message: "Lorem ipsum dolor sit a met"},

            ]

        };

    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    {/*toolbar*/}
                    <View style={styles.toolbarStyle}>
                        {/*<Image source={backButton} style={styles.backButton}/>*/}
                        <Text style={styles.titleStyle}>{'My Profile'}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("EditUserProfileScreen")
                            }}
                            style={{flexDirection: 'row', position: 'absolute', right: 10}}>
                            <Text style={styles.labelAppoinment}>{'Edit'}</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={userPic} style={styles.userpic}/>

                        <View style={{width: '100%'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000', marginBottom: 5}}
                                  numberOfLines={1}>{'Mariya Lopez'}</Text>
                            <Text
                                numberOfLines={1}
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    color: '#8f8f8f'
                                }}>{'Female 26 Years'}</Text>
                        </View>
                    </View>
                    <View style={styles.usercard}>
                        <View style={{width: '65%'}}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#ffffff',
                                marginLeft: 10
                            }}>{'Rewards'}</Text>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 22,
                                color: '#ffffff',
                                marginLeft: 10
                            }}>{'3.557 IZY'}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonWithdraw}>
                            <Text style={styles.labelWithdraw}>{'Withdraw'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'row', marginBottom: 25,
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: '46%',
                            backgroundColor: '#ffffff',
                            shadowColor: '#d0d0d0',
                            borderRadius: 15,
                            shadowOffset: {
                                width: 0,
                                height: 1
                            },
                            shadowRadius: 3,
                            shadowOpacity: 0.5,
                            elevation: 2,
                            marginLeft: 2,
                            marginRight: 2,
                            padding: 15
                        }}>
                            <Text style={{color: '#c8c8c8', fontSize: 12}}>{'Weight'}</Text>
                            <Text style={{color: '#000000', fontSize: 20, marginTop: 15}}>{'67.5 Kgs'}</Text>
                        </View>

                        <View style={{
                            width: '46%',
                            backgroundColor: '#ffffff',
                            shadowColor: '#d0d0d0',
                            borderRadius: 15,
                            shadowOffset: {
                                width: 0,
                                height: 1
                            },
                            shadowRadius: 3,
                            shadowOpacity: 0.5,
                            elevation: 2,
                            marginLeft: 15,
                            marginRight: 2,
                            padding: 15
                        }}>
                            <Text style={{color: '#c8c8c8', fontSize: 12}}>{'Height'}</Text>
                            <Text style={{color: '#000000', fontSize: 20, marginTop: 15}}>{'170 Inch'}</Text>
                        </View>
                    </View>
                    <View style={{
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15, backgroundColor: '#fff', padding: 20
                    }}>


                        <FlatList
                            data={this.state.data}
                            renderItem={({item}) =>

                                <View style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#ffffff',
                                    marginBottom: 10
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        backgroundColor: '#ffffff',

                                    }}>
                                        <Text style={{
                                            color: '#000',
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                            width: '45%'
                                        }}>{'Alergic'}</Text>
                                        <View>
                                            <Text style={{color: '#8f8f8f', padding: 2}}>{'Sample data'}</Text>
                                            <Text style={{color: '#8f8f8f', padding: 2}}>{'Sample data'}</Text>
                                            <Text style={{color: '#8f8f8f', padding: 2}}>{'Sample data'}</Text>
                                            <Text style={{color: '#8f8f8f', padding: 2}}>{'Sample data'}</Text>
                                            <Text style={{color: '#8f8f8f', padding: 2}}>{'Sample data'}</Text>
                                            <Text style={{color: '#8f8f8f', padding: 2}}>{'Sample data'}</Text>

                                        </View>
                                    </View>
                                </View>


                            }
                        />

                    </View>
                </View>
            </ScrollView>
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
export default UserProfileScreenNew;

