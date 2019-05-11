import React, {Component} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import logoImg from '../../../assets/tlogo.png';
import styles from './SignupScreenStyle'
import {TextInput} from 'react-native-paper';
import tlogo from "../../../assets/mianlog.png";


class SignupActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null
        };
    }


    render() {
        let countryData = [{
            value: 'INDIA',
        }, {
            value: 'AAAA',
        }, {
            value: 'BBB',
        }
            , {
                value: 'CCC',
            }
            , {
                value: 'DDD',
            }
        ];

        let stateData = [{
            value: 'Gujarat',
        }, {
            value: 'AAAA',
        }, {
            value: 'BBB',
        }
            , {
                value: 'CCC',
            }
            , {
                value: 'DDD',
            }
        ];

        return (
            <View style={styles.container1}>
                <View style={{alignItems: 'center'}}>
                    <Image source={tlogo} style={styles.image}/>
                </View>
                <View style={{position: 'absolute', bottom: 15, left: 25, right: 25, flex: 1, width: '100%'}}>
                    <View>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            marginTop: 50,
                            marginBottom: 10
                        }}>{`Let's start in`}</Text>
                        <Text style={{marginBottom: 35}}>{'Enter your personal information'}</Text>

                        <TextInput
                            label='NAME'
                            value={this.state.username}
                            onChangeText={text => this.setState({username: text})}

                            style={styles.inputStyle}
                        />


                        <TextInput
                            label='EMAIL'
                            value={this.state.password}
                            onChangeText={text => this.setState({password: text})}
                            style={styles.inputStyle}
                        />
                        <Text style={{fontSize: 11, marginTop: 10, marginLeft: 10}}>{'COUNTRY'}</Text>
                        <Dropdown
                            value={"Unite State"}
                            data={countryData}
                            labelFontSize={16}
                            fontSize={16}
                            labelPadding={0}
                            rippleOpacity={0}
                            onChangeText={(text) => {
                                this.setState({gender: text})
                            }}
                            containerStyle={{paddingLeft: 5, marginRight: 5, marginTop: -23}}
                        />
                        <Text style={{fontSize: 11, marginTop: 10, marginLeft: 10}}>{'STATE'}</Text>

                        <Dropdown
                            value={"New York"}
                            data={stateData}
                            labelFontSize={16}
                            fontSize={16}
                            labelPadding={0}
                            rippleOpacity={0}
                            onChangeText={(text) => {
                                this.setState({gender: text})
                            }}
                            containerStyle={{paddingLeft: 5, marginRight: 5, marginTop: -23}}
                        />

                    </View>
                    <TouchableOpacity style={styles.buttonstylelogin}

                                      onPress={() => {
                                          const {navigate} = this.props.navigation;
                                          navigate('TabScreen');
                                      }}
                    >
                        <View style={styles.innerButton}>
                            <Text style={styles.innerButton}>{'NEXT'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{alignSelf: 'center'}}
                        onPress={() => {
                            const {navigate} = this.props.navigation;
                            navigate('LoginScreen');
                        }}>
                        <Text
                            style={{fontWeight: 'bold'}}>{'SIGN IN'}</Text>
                    </TouchableOpacity>


                </View>
            </View>

        );
    }
}


export default SignupActivity
