import {Text, View, Image, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import styles from './itemViewStyle'
import download from '../../../../../../assets/ic_download_black_48dp.png'
import share from '../../../../../../assets/ic_share_variant_black_48dp.png'

export default class CustomRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity
                onPress={() => {


                    const {navigate} = this.props.navigation;

                    {
                        global.isdoctor &&
                        navigate('NewPrescriptionsScreen');
                    }
                }}

                style={styles.container}>
                <View style={styles.innerContainer}>

                    <Image
                        source={{uri: 'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'}}
                        style={{borderRadius: 25, height: 50, width: 50, marginRight: 20}}/>
                    <View style={{justifyContent: 'center'}}>
                        <Text
                            style={{color: '#000', fontWeight: 'bold', fontSize: 18,}}
                            key={this.props.item.id.toString()}>{'Username here'}</Text>

                    </View>
                    {!global.isdoctor &&
                    <View style={{flexDirection: 'row', position: 'absolute', right: 10}}>
                        <Image source={download} style={styles.icon}/>
                        <Image source={share} style={styles.icon}/>
                    </View>}
                </View>
            </TouchableOpacity>
        );
    }
}
