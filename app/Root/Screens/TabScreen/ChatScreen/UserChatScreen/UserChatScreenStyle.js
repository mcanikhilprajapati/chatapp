import {StyleSheet} from "react-native";
import {color} from "../../../../../Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.tabBGColor,
        paddingLeft: 5,
        paddingRight: 5, paddingTop: 20
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: color.black
    },
    labelAppoinment: {
        color: color.dodgerBlue,
        position: 'absolute',
        right: 30,
        top: 30,
        fontWeight: 'bold',
        fontSize: 16
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    searchView: {
        flexDirection: 'row',
        position:'absolute',
        backgroundColor: color.white,
        borderRadius: 20,
        left:15,
        bottom: 15,
        right:45
    },
    searchText: {
        padding: 10,
        color: color.black,
        width:'85%'
    },
    imageSearch: {
        height: 24,
        width: 24,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        resizeMode: 'contain'
    },
    backButton: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    userpic: {
        height: 45,
        width: 45,
        marginLeft: 10,
        marginRight: 5,

    },
    toolbarStyle: {
        alignItems: 'center'
        , flexDirection: 'row', marginTop: 25, marginBottom: 20
    },
    toolbarIcon: {
        height: 32,
        width: 32,
        margin: 5
    },
    imageCamera: {
        height: 30,
        width: 30,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 30,
        resizeMode: 'contain'
    },

});

export default styles;
