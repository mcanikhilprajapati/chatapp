import {Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import styles from './SettingsScreenStyle'


class SettingsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
            isEditable: false
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{'Settings'}</Text>
                <TouchableOpacity style={styles.appoinmentContainer}

                                  onPress={() => {
                                      this.setState({isEditable: !this.state.isEditable})
                                  }}>
                    <Text style={styles.labelAppoinment}>{this.state.isEditable ? 'Save' : 'Edit'}</Text>
                </TouchableOpacity>
                <View style={styles.card}>
                    <View
                        style={{flexDirection: 'row'}}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#000',
                            width: '50%'
                        }}

                        >{'Change Email'}</Text>
                        <TextInput editable={this.state.isEditable}
                                   placeholder={'Email'}
                                   style={{
                                       fontWeight: 'bold',
                                       fontSize: 16,
                                       color: '#c8c8c8',
                                       width: '50%'
                                   }}>{'test@gmail.com'}</TextInput>
                    </View>
                    <View style={{
                        width: '100%',
                        backgroundColor: '#c8c8c8',
                        height: 0.5,
                        marginTop: 10,
                        marginBottom: 10
                    }}/>

                    <View
                        style={{flexDirection: 'row'}}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#000',
                            width: '50%'
                        }}
                        >{'Change Phone'}</Text>
                        <TextInput
                            editable={this.state.isEditable}
                            placeholder={'Email'}
                            style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#c8c8c8',
                                width: '50%'
                            }}>9876543212</TextInput>
                    </View>
                    <View style={{
                        width: '100%',
                        backgroundColor: '#c8c8c8',
                        height: 0.5,
                        marginTop: 10,
                        marginBottom: 10
                    }}/>


                    <View
                        style={{flexDirection: 'row'}}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#000',
                            width: '50%'
                        }}>{'Invite to premium'}</Text>
                        <TextInput placeholder={'Email'}
                                   style={{
                                       fontWeight: 'bold',
                                       fontSize: 16,
                                       color: '#c8c8c8',
                                       width: '50%'
                                   }}>test@izzy.com</TextInput>
                    </View>
                </View>


                <View style={styles.card}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                const {navigate} = this.props.navigation;
                                 navigate('PrescriptionsScreen');
                            }}
                        ><Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#000'
                        }}>{'Prescriptions'}</Text></TouchableOpacity>

                    </View>
                    <View style={{
                        width: '100%',
                        backgroundColor: '#c8c8c8',
                        height: 0.5,
                        marginTop: 10,
                        marginBottom: 10
                    }}/>

                    <View
                    >
                        <TouchableOpacity

                            onPress={() => {
                                const {navigate} = this.props.navigation;
                                navigate('PaymentScreen');
                            }}
                        >
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: '#000',

                            }}>{'Add Payment'}</Text></TouchableOpacity>

                    </View>

                </View>


                <TouchableOpacity
                    onPress={() => {
                        const {navigate} = this.props.navigation;
                        navigate('LoginScreen');
                    }}
                ><Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#000', padding: 15, textAlign: 'center'
                }}>{'LOGOUT'}</Text></TouchableOpacity>


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
export default SettingsScreen;
