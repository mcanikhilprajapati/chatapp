import {Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import React, {Component} from "react";
import {connect} from "react-redux";
import styles from './ChatScreenStyle'
import search from "../../../../assets/ic_magnify_grey600_48dp.png";
import CustomRow from './itemView';
import _ from "lodash";

const data = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },

]

class ChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{'Chat'}</Text>

                {!global.isdoctor &&

                <TouchableOpacity style={styles.appoinmentContainer}
                                  onPress={() => {
                                      const {navigate} = this.props.navigation;
                                      navigate('UserContactScreen');
                                  }}
                >
                    <Text style={styles.labelAppoinment}>{'Contacts'}</Text>
                </TouchableOpacity>
                }


                <TouchableOpacity
                    style={styles.searchView}>
                    <View style={styles.searchContainer}>
                        <Image source={search} style={styles.imageSearch}/>
                        <Text style={styles.searchText}>{'Search'}</Text>
                    </View>
                </TouchableOpacity>


                <ScrollView showsVerticalScrollIndicator={false}>
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
export default ChatScreen;
