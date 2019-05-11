import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './LoginScreenStyle'
import tlogo from '../../../assets/mianlog.png'
import {TextInput} from 'react-native-paper';

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null
        };
    }


    render() {
        return (

            <View style={styles.container1}>
                <View style={{alignItems: 'center'}}>
                    <Image source={tlogo} style={styles.image}/>
                    <Text style={{padding: 10}}>{'Healthcare redesigned with you in Mind'}</Text>
                </View>


                <View style={{position: 'absolute', bottom: 15, left: 25, right: 25, flex: 1, width: '100%'}}>
                    <View>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            marginTop: 70,
                            marginBottom: 10
                        }}>{`Let's go in`}</Text>
                        <Text style={{marginBottom: 35}}>{'Enter your email and password'}</Text>

                        <TextInput
                            label='USERNAME'
                            value={this.state.username}
                            onChangeText={text => this.setState({username: text})}

                            style={styles.inputStyle}
                        />


                        <TextInput
                            label='PASSWORD'
                            value={this.state.password}
                            onChangeText={text => this.setState({password: text})}
                            secureTextEntry={true}
                            style={styles.inputStyle}
                        />

                    </View>
                    <TouchableOpacity style={styles.buttonstylelogin}

                                      onPress={() => {


                                          const {navigate} = this.props.navigation;
                                          navigate('TabScreen');
                                      }}>
                        <View style={styles.innerButton}>
                            <Text style={styles.innerButton}>{'SIGN IN'}</Text>
                        </View>
                    </TouchableOpacity>
                    {!global.isdoctor &&
                    <TouchableOpacity
                        style={{alignSelf: 'center', marginBottom: 20}}
                        onPress={() => {


                            const {navigate} = this.props.navigation;
                            navigate('SignupScreen');
                        }}>
                        <Text
                            style={{fontWeight: 'bold'}}>{'SIGN UP FOR AN ACCOUNT'}</Text>
                    </TouchableOpacity>
                    }


                    <TouchableOpacity
                        style={{alignSelf: 'center'}}>
                        <Text
                            style={{fontWeight: 'bold', color: '#8f8f8f'}}>{'TERMS AND CONDITIONS'}</Text>
                    </TouchableOpacity>


                </View>


            </View>

        );
    }
}


export default LoginScreen;
