import {Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import React, {Component} from "react";
import styles from './PaymentScreenStyle'


class PaymentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
        };

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titleStyle}>{'Payments'}</Text>
                <TouchableOpacity style={styles.appoinmentContainer}

                                  onPress={() => {
                                      this.props.navigation.goBack(null);
                                  }}>
                    <Text style={styles.labelAppoinment}>{'Cancel'}</Text>
                </TouchableOpacity>


                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#000',
                    marginTop: 25
                }}

                >{'Amount'}</Text>
                <View style={styles.card}>
                    <View
                        style={{flexDirection: 'row'}}>

                        <TextInput editable={this.state.isEditable}
                                   placeholder={'Email'}
                                   style={{
                                       fontWeight: 'bold',
                                       fontSize: 45,
                                       color: '#000000',
                                       width: '50%',
                                       padding: 15,
                                       textAlign: 'center'
                                   }}>{'999'}</TextInput>


                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#c8c8c8',
                            width: '50%'
                        }}

                        >{'INR'}</Text>

                    </View>

                </View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#000',
                    marginTop: 15
                }}
                >{'Your Saved Cards'}</Text>

                <View style={styles.card2}>
                    <View>

                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#fff',
                            padding: 15
                        }}>{'Xyx name'}</Text>


                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#fff',
                            paddingLeft: 15, marginTop: 30
                        }}>{'Card name'}</Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: '#fff',
                            padding: 15
                        }}>{'**** **** **** 4569'}</Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#fff',
                            paddingLeft: 15, marginTop: 15
                        }}>{'09/20'}</Text>


                        <Text style={{color: '#c8c8c8', fontSize: 35, position: 'absolute', right: 25}}>{'VISA'}</Text>

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
export default PaymentScreen;
