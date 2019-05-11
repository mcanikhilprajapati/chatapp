import {Text, View, Image,TouchableOpacity} from "react-native";
import React, {Component} from "react";
import styles from './itemViewStyle'
import phoneicon from '../../../../../assets/phoneicon.png'

export default class CustomRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <TouchableOpacity style={styles.container}
            onPress={()=>{
                this.props.navigation.navigate("UserChatScreen")
            }}>
                <View style={styles.innerContainer}>

                    <Image
                        source={{uri: 'https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png'}}
                        style={{borderRadius: 35, height: 70, width: 70, marginRight: 10}}/>
                    <View style={{justifyContent: 'center',}}>
                        <Text
                            style={{color: '#000', fontWeight: 'bold', fontSize: 18}}
                            key={this.props.item.id.toString()}>{'User Name'}</Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#c8c8c8',
                            fontWeight: 'bold',
                            marginTop: 5
                        }}>{'Hello,How are you ?'}</Text>


                    </View>
                    <Text
                        style={styles.timelabel
                        }>{'03.30'}</Text>
                    <View style={styles.messageCount}>
                        <Text style={{color:'#fff',padding: 1,fontSize:12}}>{'2'}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}
