import {Text, View, Image} from "react-native";
import React, {Component} from "react";
import styles from './itemViewStyle'
import phoneicon from '../../../../../assets/phoneicon.png'

export default class CustomRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>

                    <Image
                        source={{uri: 'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'}}
                        style={{borderRadius: 35, height: 70, width: 70, marginRight: 10}}/>
                    <View style={{justifyContent: 'center',}}>
                        <Text
                            style={{color: '#000', fontWeight: 'bold', fontSize: 18}}
                            key={this.props.item.id.toString()}>{'User Name'}</Text>
                        <Text style={{fontSize: 12, color: '#c8c8c8', fontWeight: 'bold'}}>{'15min'}</Text>
                        <Text style={{fontSize: 14, color: '#c8c8c8', fontWeight: 'bold'}}>{'Phone Number'}</Text>

                    </View>
                    <Image source={phoneicon}
                           style={{position: 'absolute', right: 5, height: 60, alignSelf: 'center'}}/>

                </View>
            </View>
        );
    }
}
