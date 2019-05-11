import {Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import React, {Component} from "react";
import {connect} from "react-redux";
import styles from './UserContactScreenStyle'
import search from "../../../../../assets/ic_magnify_grey600_48dp.png";
import backbutton from "../../../../../assets/ic_arrow_left_black_48dp.png";
import CustomRow from './itemView';
import _ from "lodash";

const data = [
    {
        userId: 1,
        id: 1,
        title: "Doctor 1",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "Doctor 2",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "Doctor 3",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "Dr.Izzy",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

]

class UserContactScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={backbutton}
                           style={{height: 30, width: 30, alignItems: 'center', marginRight: 15, marginTop: 5,}}/>
                    <Text style={styles.titleStyle}>{'New Call'}</Text>
                </View>

                {global.isdoctor &&

                <TouchableOpacity
                    style={styles.searchView}>
                    <View style={styles.searchContainer}>
                        <Image source={search} style={styles.imageSearch}/>
                        <Text style={styles.searchText}>{'Search'}</Text>
                    </View>
                </TouchableOpacity>
                }

                <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
                    {_.map(data, (item, index) => {
                        return (
                            <CustomRow
                                navigation={this.props.navigation}
                                item={item}
                            />
                        );
                    })}
                </ScrollView>
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
export default UserContactScreen;
