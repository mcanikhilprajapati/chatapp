import {StyleSheet} from "react-native";
import {color} from "../../../../Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.tabBGColor,
        paddingLeft: 15,
        paddingRight: 15, paddingTop: 20
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: color.black,

    },
    labelAppoinment: {
        color: color.dodgerBlue,
        fontWeight: 'bold',
        fontSize: 16
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    searchView: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: color.white,
        borderRadius: 20,
        left: 15,
        bottom: 15,
        right: 45
    },
    searchText: {
        padding: 10,
        color: color.black,
        width: '85%'
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
        height: 80,
        width: 80,
        marginLeft: 10,
        marginRight: 5,
        backgroundColor: color.white,
        borderRadius: 40,
        borderWidth: 10,
        borderColor: color.white

    },
    toolbarStyle: {
        alignItems: 'center'
        , flexDirection: 'row', marginTop: 25, marginBottom: 20
    },
    toolbarIcon: {
        height: 32,
        width: 32,
        margin: 5,
        tintColor:color.dustyGray
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
    usercard: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 15,
        backgroundColor: color.dodgerBlue,
        height: 80,
        padding: 15,
        alignItems:'center',
        marginTop:25,
        shadowColor: '#d0d0d0',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 2,
        marginLeft: 2,
        marginRight: 2,
        marginBottom:25
    },
    labelWithdraw: {
        color: color.dodgerBlue,
        marginLeft:10,
        marginRight:10
    },
    buttonWithdraw: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 30,
        padding:5,


    }

});

export default styles;
