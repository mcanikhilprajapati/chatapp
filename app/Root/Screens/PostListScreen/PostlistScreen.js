import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './PostlistScreenStyle'
import {getPostList} from "../../../store/postlist";
import connect from "react-redux/es/connect/connect";
import _ from "lodash";
import plusButton from '../../../assets/plus.png';
import CustomRow from './itemView';
let _this = null;
class PostlistScreen extends Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {
        _this = this;
        this.props.getPostList()
    }

    static  navigationOptions = (navigation) => ({
        title: 'Post List',
        headerLeft: null,
        headerStyle: {
            color: 'black',
            textAlign: 'center',
            fontWeight: '500',

        },
        headerRight: <TouchableOpacity style={styles.image}
                                       onPress={() => {
                                           _this.props.navigation.navigate('AddPostScreen')
                                       }}>

            <Image source={plusButton}/>
        </TouchableOpacity>
    })



    render() {
        return (
            <View style={styles.container}>

                <Text>{'UNDER DEVELOPMENT'}</Text>
            </View>

        );
    }


}

const mapActionCreators = {
    getPostList
};

const mapStateToProps = state => {
    return {
        isLoading: state.postlist.loading,
        data: state.postlist.data,
        message: state.postlist.message
    };
};
export default connect(mapStateToProps, mapActionCreators)(PostlistScreen);
