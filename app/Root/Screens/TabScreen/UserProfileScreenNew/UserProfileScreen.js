import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import styles from './UserProfileScreenStyle'
import backButton from '../../../../assets/ic_arrow_left_black_48dp.png'
import userPic from '../../../../assets/tlogo.png'
import setting from '../../../../assets/ic_settings_black_48dp.png'
// import socialT from '../../../../assets/ic_twitter_white_48dp.png'
// import socialL from '../../../../assets/ic_linkedin_white_48dp.png'

class UserProfileScreen extends Component {

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
                    <View style={{backgroundColor: '#3D97FC', width: 500, height: 280, position: 'absolute', top: 0,}}/>

                    {/*toolbar*/}
                    <View style={styles.toolbarStyle}>
                        {/*<Image source={backButton} style={styles.backButton}/>*/}
                        <Text style={styles.titleStyle}>{'Profile'}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("EditUserProfileScreenNew")
                            }}
                            style={{flexDirection: 'row', position: 'absolute', right: 10}}>
                            <Text style={styles.labelAppoinment}>{'Edit'}</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.usercard}>
                        <View>
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
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            color: '#8f8f8f'
                                        }}>{'4.5 ******'}</Text>
                                </View>
                            </View>
                        </View>
                        <Text

                            style={{
                                fontWeight: 'bold',
                                fontSize: 14,
                                color: '#c8c8c8'
                            }}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem'}</Text>
                        {/*line*/}
                        <View
                            style={{
                                backgroundColor: '#c8c8c8',
                                height: 0.5,
                                width: '100%',
                                marginBottom: 20,
                                marginTop: 20
                            }}
                        />

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: '65%'}}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: '#c8c8c8',
                                    marginLeft: 10
                                }}>{'Rewards'}</Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    color: '#000000',
                                    marginLeft: 10
                                }}>{'3.557 IZY'}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={()=>{
                                    const {navigate} = this.props.navigation;
                                    navigate('PaymentScreen');
                                }}
                                style={styles.buttonWithdraw}>
                                <Text style={styles.labelWithdraw}>{'Withdraw'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>{'Biography'}</Text>

                    <View style={styles.usercard}>

                        {/*<Text style={styles.labelTitle}>{'Email'}</Text>*/}
                        {/*<Text style={styles.labelDesc}>{'test@gmail.com'}</Text>*/}


                        <Text style={styles.labelTitle}>{'Education'}</Text>
                        <Text style={styles.labelDesc}>{'Doctor Of medicine ,Xyzzzzzzzzzzzzz'}</Text>

                        <Text style={styles.labelTitle}>{'Experience'}</Text>
                        <Text style={styles.labelDesc}>{'25 years of experience of Medicine'}</Text>
                    </View>

                    {/*<View style={{flexDirection: 'row'}}>*/}
                        {/*<View style={styles.socialIcon}>*/}
                            {/*<Image source={socialL} style={{height:24,width:24}}/>*/}
                        {/*</View>*/}
                        {/*<View style={styles.socialIcon}>*/}
                            {/*<Image source={socialT}*/}
                                   {/*style={{height:24,width:24,}}/>*/}
                        {/*</View>*/}
                    {/*</View>*/}
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
export default UserProfileScreen;
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
