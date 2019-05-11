import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import styles from './PaymentScreenStyle'
import {TextInput} from 'react-native-paper';
import tlogo from "../../../../assets/logoizzy.png";


class PaymentScreen extends Component {
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

        let subscription = [{
            value: 'MONTHLY',
        }, {
            value: 'YEARLY',
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
                    }}>{'Payment'}</Text>
                    <Text style={{marginBottom: 15}}>{'Make Payment'}</Text>

                    <View style={styles.card}>

                        <Text style={{fontSize: 12, marginTop: 15,marginLeft:10}}>{'SELECT PACKAGE'}</Text>

                        <Dropdown
                            value={"MONTHLY"}
                            data={subscription}
                            labelFontSize={16}
                            fontSize={16}
                            labelPadding={0}
                            rippleOpacity={0}
                            onChangeText={(text) => {
                                this.setState({gender: text})
                            }}
                            containerStyle={{paddingLeft: 5, marginRight: 5, marginTop: -18,}}
                        />

                        <TextInput
                            label='CARD NUMBER'
                            value={this.state.username}
                            onChangeText={text => this.setState({username: text})}
                            style={styles.inputStyle}
                        />
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <TextInput
                                label='EXPIRED DATE'
                                value={this.state.username}
                                onChangeText={text => this.setState({username: text})}
                                style={[styles.inputStyle, {width: '50%', marginLeft: 5}]}
                            />
                            <TextInput
                                label='CVV'
                                value={this.state.username}
                                onChangeText={text => this.setState({username: text})}
                                style={[styles.inputStyle, {width: '50%', marginLeft: 5}]}
                            />
                        </View>


                        <Text style={{fontSize: 12, marginTop: 15,marginLeft:10}}>{'COUNTRY'}</Text>

                        <Dropdown
                            value={"INDIA"}
                            data={countryData}
                            labelFontSize={16}
                            fontSize={16}
                            labelPadding={0}
                            rippleOpacity={0}
                            onChangeText={(text) => {
                                this.setState({gender: text})
                            }}
                            containerStyle={{paddingLeft: 5, marginRight: 5, marginTop: -18,}}
                        />


                        <TextInput
                            label='ZIP CODE'
                            value={this.state.username}
                            onChangeText={text => this.setState({username: text})}
                            style={styles.inputStyle}
                        />
                        <TouchableOpacity style={styles.buttonstylelogin}

                                          onPress={() => {
                                              this.props.navigation.goBack(null);
                                          }}
                        >
                            <View style={styles.innerButton}>
                                <Text style={styles.innerButton}>{'PAY NOW'}</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </View>


            </ScrollView>

        );
    }
}


export default PaymentScreen
