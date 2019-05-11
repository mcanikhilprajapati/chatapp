import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import styles from './CreateAppointmentScreenStyle'
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
            value: 'Select Priority Level',
        },
            {
                value: 'Level 1',
            },
            {
                value: 'Level 2',
            }
            , {
                value: 'Level 3',
            }
            , {
                value: 'Level 4',
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
            <ScrollView style={styles.container1}>


                <View>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginTop: 20,
                        marginBottom: 10
                    }}>{'Create Appointment'}</Text>
                    <Text style={{marginBottom: 35}}>{'Make new Appointment'}</Text>


                    <TextInput
                        label='CHOOSE DOCTOR'
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}

                        style={styles.inputStyle}
                    />


                    <TextInput
                        label='APPOINTMENT START DATE'
                        value={this.state.password}
                        onChangeText={text => this.setState({password: text})}
                        style={styles.inputStyle}
                    />
                    <TextInput
                        label='APPOINTMENT END DATE'

                        onChangeText={text => this.setState({password: text})}
                        style={styles.inputStyle}
                    />

                    <Text style={{fontSize: 11, marginTop: 10, marginLeft: 10}}>{'PRIORITY'}</Text>
                    <Dropdown
                        value={"low"}
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
                    <TextInput
                        label='PRIORITY'
                        onChangeText={text => this.setState({password: text})}
                        style={styles.inputStyle}
                    />

                    <TextInput
                        label='NOTES'
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
                        <Text style={styles.innerButton}>{'CREATE'}</Text>
                    </View>
                </TouchableOpacity>


            </ScrollView>

        );
    }
}


export default SignupActivity
