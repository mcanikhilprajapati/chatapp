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
        color: color.white
    },
    labelAppoinment: {
        color: color.white,
        // position: 'absolute',
        // right: 30,
        // top: 30,
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
        resizeMode: 'contain',
        tintColor: color.white
    },
    userpic: {
        height: 80,
        width: 80,
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
        tintColor: color.white
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
        width: '100%',
        borderRadius: 15,
        backgroundColor: color.white,
        padding: 15,

        marginTop: 15,
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
        marginBottom: 25
    },
    labelWithdraw: {
        color: color.white,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center'
    },
    buttonWithdraw: {
        backgroundColor: color.dodgerBlue,
        borderRadius: 15,
        height: 35,
        padding: 5,
    },
    labelTitle: {
        color: color.silverChalice,
        fontSize: 16,

    },
    labelDesc: {
        color: color.black,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15
    },
    socialIcon:{
        backgroundColor:color.dodgerBlue,
        height:50,
        width:50,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    }


});

export default styles;
