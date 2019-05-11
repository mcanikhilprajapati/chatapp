import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView, Button} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import styles from './EditUserProfileScreenStyle'
import {TextInput} from 'react-native-paper';
import tlogo from "../../../../assets/logoizzy.png";
// in managed apps:
import {ImagePicker} from 'expo';

class SignupActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            image: null,
        };
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    };

    render() {
        let {image} = this.state;
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
            <ScrollView style={styles.container1}>

                <View>
                    {/*<TouchableOpacity*/}
                    {/*onPress={() => {*/}
                    {/*this.props.navigation.goBack(null)*/}
                    {/*}}*/}
                    {/*style={{position: 'absolute', right: 10, top: 45}}>*/}
                    {/*<Text style={styles.labelAppoinment}>{'Save'}</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginTop: 20,
                        marginBottom: 10, width: '70%'
                    }}>{'Edit Profile'}</Text>
                    <Text style={{marginBottom: 15}}>{'Edit your personal information'}</Text>


                    <View style={{alignItems: 'center'}}>
                        <Image source={image ? {uri: image} : tlogo} style={styles.image}/>


                        <TouchableOpacity
                            onPress={this._pickImage}
                        >
                            <Text style={{padding: 10}}>{'Pick Image'}</Text>
                        </TouchableOpacity>

                    </View>
                    <TextInput
                        label='NAME'
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}

                        style={styles.inputStyle}
                    />


                    <TextInput
                        label='WEIGHT'
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}
                        style={styles.inputStyle}
                    />

                    <TextInput
                        label='HEIGHT'
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


                    <TouchableOpacity style={styles.buttonstylelogin}

                                      onPress={() => {
                                          this.props.navigation.goBack(null);
                                      }}
                    >
                        <View style={styles.innerButton}>
                            <Text style={styles.innerButton}>{'SAVE'}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.buttonstylelogin}

                          onPress={() => {
                              this.props.navigation.goBack(null);
                          }}
                    >

                    </View>

                </View>


            </ScrollView>

        );
    }
}


export default SignupActivity
