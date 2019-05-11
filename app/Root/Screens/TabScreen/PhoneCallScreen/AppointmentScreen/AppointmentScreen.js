import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import styles from './AppointmentScreenStyle'
import search from "../../../../../assets/ic_magnify_grey600_48dp.png";


class AppointmentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{'Appointments'}</Text>
                {!global.isdoctor &&
                <TouchableOpacity style={styles.appoinmentContainer}

                                  onPress={() => {
                                      const {navigate} = this.props.navigation;
                                      navigate('CreateAppointmentScreen');
                                  }}>
                    <Text style={styles.labelAppoinment}>{'Create'}</Text>
                </TouchableOpacity>
                }

                <TouchableOpacity
                    style={styles.searchView}>
                    <View style={styles.searchContainer}>
                        <Image source={search} style={styles.imageSearch}/>
                        <Text style={styles.searchText}>{'Search'}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>

                    <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 15}}>{'No Appointment '}</Text>
                    <Text style={{
                        color: '#c8c8c8',
                        textAlign: 'center'
                    }}>{'Sorry,Currently no appointment have been scheduled for you'}</Text>
                </View>
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
export default AppointmentScreen;
