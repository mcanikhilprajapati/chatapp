import {ActivityIndicator, AppRegistry, View, Text, Image} from "react-native";
import React, {Component} from "react";
import styles from './SplashScreenStyle'

import mianlog from '../../../assets/mianlog.png'

export default class SplshScreen extends Component {

    componentWillMount() {
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            if (global.isdoctor === true) {
                navigate('LoginScreen');
            } else {
                navigate('WelcomeScreen');
            }
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.container}>
                    <Image
                        source={mianlog}
                        style={{resizeMode:'contain',height:100,margin: 50}}
                    />
                </View>
            </View>

        );
    }
}

AppRegistry.registerComponent('SplshScreen', function () {
    return SplshScreen;
});


