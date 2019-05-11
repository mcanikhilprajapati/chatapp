import {Text, View, Image, TouchableOpacity} from "react-native";
import React, {Component} from "react";
import styles from './itemViewStyle'
import callicon from '../../../../../../assets/ic_video_outline_black_48dp.png'

export default class CustomRow extends Component<> {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity style={styles.container}
                              onPress={() => {
                                  // this.props.navigation.navigate("UserChatScreen")
                                  this.props.navigation.goBack(null);
                              }}>
                <View style={styles.innerContainer}>

                    <Image
                        source={{uri: 'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'}}
                        style={{borderRadius: 35, height: 70, width: 70, marginRight: 10}}/>
                    <View style={{justifyContent: 'center',}}>
                        <Text
                            style={{color: '#000', fontWeight: 'bold', fontSize: 18}}
                            key={this.props.item.id.toString()}>{this.props.item.title}</Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#c8c8c8',
                            fontWeight: 'bold',
                            marginTop: 5
                        }}>{'Details'}</Text>


                    </View>


                    <Image
                        source={callicon}
                        style={{position: 'absolute', right: 5, height: 40, width: 40, marginRight: 5, top: 15}}/>
                </View>
            </TouchableOpacity>
        );
    }
}
