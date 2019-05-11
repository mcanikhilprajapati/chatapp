import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './WelcomeScreenStyle'
import Swiper from 'react-native-swiper';
import slider1 from '../../../assets/slider1.png'
import izlogo from '../../../assets/izzylogo.jpeg'

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }


    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>


                <View style={styles.slide1}>
                    {/*<Text*/}
                        {/*style={{*/}
                            {/*color: '#000000',*/}
                            {/*fontWeight: 'bold',*/}
                            {/*fontSize: 30,*/}
                            {/*padding: 20*/}
                        {/*}}>{'IZZY Health'}</Text>*/}
                    <Image source={slider1} style={{height: 150, width: 150}}/>
                    <Text style={styles.textHeader}>{'Welcome to Izzy\n '}</Text>
                    <Text
                        style={styles.textDetails}>{'A One-of-Kind Health & Wellness Experience Designed with your Family in Minnd '}</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        const {navigate} = this.props.navigation;
                        navigate('LoginScreen');
                    }}>
                        <Text style={styles.skiptext}>{'Skip'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.slide1}>
                    <Image source={slider1} style={{height: 150, width: 150}}/>
                    <Text style={styles.textHeader}>{'Chatting and Video Calling'}</Text>
                    <Text
                        style={styles.textDetails}>{'A One-of-Kind Health & Wellness Experience Designed with your Family in Minnd '}</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            const {navigate} = this.props.navigation;
                            navigate('LoginScreen');
                        }}>
                        <Text style={styles.skiptext}>{'Skip'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide1}>
                    <Image source={slider1} style={{height: 150, width: 150}}/>
                    <Text style={styles.textHeader}>{'Invite friends and Family'}</Text>
                    <Text
                        style={styles.textDetails}>{'A One-of-Kind Health & Wellness Experience Designed with your Family in Minnd '}</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            const {navigate} = this.props.navigation;
                            navigate('LoginScreen');
                        }}>
                        <Text style={styles.skiptext}>{'Skip'}</Text>
                    </TouchableOpacity>
                </View>

            </Swiper>

        );
    }
}

// const mapActionCreators = {
//     createNewPost
// };
//
// const mapStateToProps = state => {
//
//     return {
//         isLoading: state.addpost.loading,
//         data: state.addpost.data,
//         message: state.addpost.message
//     };
// };
//export default connect(mapStateToProps, mapActionCreators)(WelcomeScreen);
export default WelcomeScreen;
