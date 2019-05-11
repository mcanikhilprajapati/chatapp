import styles from "../PostlistScreenStyle";
import {Text, View, TouchableOpacity, ImageBackground} from "react-native";
import React, {Component} from "react";


export default class CustomRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ImageBackground
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG2LU5Zolo5Kkkj_SKtc2q5wx5LJq48rBSN9VKh7tOISWCUDA4Dg'}}
                style={styles.imageCardView} borderRadius={5}
            >
                <Text style={styles.text}
                      key={this.props.item.id.toString()}>{'userId : ' + this.props.item.userId}</Text>
                <Text style={styles.text}>{'Id : ' + this.props.item.id}</Text>
                <Text style={styles.text}>{'title : ' + this.props.item.title}</Text>

            </ImageBackground>
        );
    }
}
