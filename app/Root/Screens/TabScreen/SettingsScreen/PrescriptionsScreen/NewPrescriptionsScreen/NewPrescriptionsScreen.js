import {Image,ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import styles from './NewPrescriptionsScreenStyle'
import tlogo from "../../../../../../assets/mianlog.png";
import {TextInput} from "react-native-paper";
import {Dropdown} from "react-native-material-dropdown";


class NewPrescriptionsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
        };

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titleStyle}>{'New Prescriptions'}</Text>
                <TouchableOpacity style={styles.appoinmentContainer}

                                  onPress={() => {
                                      const {navigate} = this.props.navigation;
                                      // navigate('AppointmentScreen');
                                  }}>
                    {/*<Text style={styles.labelAppoinment}>{'Create'}</Text>*/}
                </TouchableOpacity>
                {/*<TouchableOpacity*/}
                {/*style={styles.searchView}>*/}
                {/*<View style={styles.searchContainer}>*/}
                {/*<Image source={search} style={styles.imageSearch}/>*/}
                {/*<Text style={styles.searchText}>{'Search'}</Text>*/}
                {/*</View>*/}
                {/*</TouchableOpacity>*/}


                <View style={{alignItems: 'center'}}>
                    <Image source={tlogo} style={styles.image}/>
                </View>

                <View>

                    <TextInput
                        label='Details 1'
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}

                        style={styles.inputStyle}
                    />


                    <TextInput
                        label='Details 2'
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}

                        style={styles.inputStyle}
                    />
                    <TextInput
                        label='Details 3'
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}

                        style={styles.inputStyle}
                    />
                    <TextInput
                        label='Details 4'
                        value={this.state.username}
                        onChangeText={text => this.setState({username: text})}

                        style={styles.inputStyle}
                    />




                </View>
                <TouchableOpacity style={styles.buttonstylelogin}

                                  onPress={() => {
                                      const {navigate} = this.props.navigation.goBack(null);
                                      //navigate('TabScreen');
                                  }}
                >
                    <View style={styles.innerButton}>
                        <Text style={styles.innerButton}>{'SEND NOW'}</Text>
                    </View>
                </TouchableOpacity>


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
export default NewPrescriptionsScreen;
