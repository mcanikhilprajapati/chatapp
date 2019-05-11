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
                    <Text style={{marginBottom: 100}}>{'Make new Appointment'}</Text>
                    <Text
                        style={{
                            marginBottom: 100,
                            color: '#000'
                        }}>{'In order to set an appointment call. You must upgrade account'}</Text>


                </View>
                <TouchableOpacity style={styles.buttonstylelogin}

                                  onPress={() => {
                                      this.props.navigation.navigate('GetPaymentScreen')
                                  }}
                >
                    <View style={styles.innerButton}>
                        <Text style={styles.innerButton}>{'PAYMENT'}</Text>
                    </View>
                </TouchableOpacity>


            </ScrollView>

        );
    }
}


export default SignupActivity
