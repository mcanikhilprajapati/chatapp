import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import styles from './EditUserProfileScreenStyle'
import {TextInput} from 'react-native-paper';
import tlogo from "../../../../assets/logoizzy.png";


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
            value: 'United State',
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
            value: 'New York',
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


                <View>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginTop: 20,
                        marginBottom: 10
                    }}>{'Edit Profile'}</Text>
                    <Text style={{marginBottom: 35}}>{'Edit your personal information'}</Text>


                    <View style={{alignItems: 'center'}}>
                        <Image source={tlogo} style={styles.image}/>
                    </View>
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
                    <TextInput
                        label='EDUCATION'

                        onChangeText={text => this.setState({password: text})}
                        style={styles.inputStyle}
                    />


                    <TextInput
                        label='EXPERIENCE'

                        onChangeText={text => this.setState({password: text})}
                        style={styles.inputStyle}
                    />
                    {/*<Text style={{fontSize: 11, marginTop: 10, marginLeft: 10}}>{'COUNTRY'}</Text>*/}
                    {/*<Dropdown*/}
                        {/*value={"Unite State"}*/}
                        {/*data={countryData}*/}
                        {/*labelFontSize={16}*/}
                        {/*fontSize={16}*/}
                        {/*labelPadding={0}*/}
                        {/*rippleOpacity={0}*/}
                        {/*onChangeText={(text) => {*/}
                            {/*this.setState({gender: text})*/}
                        {/*}}*/}
                        {/*containerStyle={{paddingLeft: 5, marginRight: 5, marginTop: -23}}*/}
                    {/*/>*/}
                    {/*<Text style={{fontSize: 11, marginTop: 10, marginLeft: 10}}>{'STATE'}</Text>*/}

                    {/*<Dropdown*/}
                        {/*value={"New York"}*/}
                        {/*data={stateData}*/}
                        {/*labelFontSize={16}*/}
                        {/*fontSize={16}*/}
                        {/*labelPadding={0}*/}
                        {/*rippleOpacity={0}*/}
                        {/*onChangeText={(text) => {*/}
                            {/*this.setState({gender: text})*/}
                        {/*}}*/}
                        {/*containerStyle={{paddingLeft: 5, marginRight: 5, marginTop: -23}}*/}
                    {/*/>*/}

                </View>
                <TouchableOpacity style={styles.buttonstylelogin}

                                  onPress={() => {
                                      this.props.navigation.goBack(null);
                                  }}
                >
                    <View style={styles.innerButton}>
                        <Text style={styles.innerButton}>{'SAVE'}</Text>
                    </View>
                </TouchableOpacity>


            </View>

        );
    }
}


export default SignupActivity
