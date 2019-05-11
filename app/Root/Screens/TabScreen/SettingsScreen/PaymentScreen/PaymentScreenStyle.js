import {StyleSheet} from "react-native";
import {color} from "../../../../../Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.tabBGColor,
        paddingLeft: 20,
        paddingRight: 20,paddingTop:40
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: color.black
    },
    appoinmentContainer: {
        position: 'absolute',
        right: 30,
        top: 5,
    },
    labelAppoinment: {
        color: color.dodgerBlue,
        fontWeight: 'bold',
        fontSize: 16
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchView: {
        backgroundColor: color.white,
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 15
    },
    searchText: {
        padding: 10,
        color: color.black
    },
    imageSearch: {
        height: 24,
        width: 24,
        marginLeft:10,
        marginTop:5,
        marginBottom:5,
        marginRight:5,
        resizeMode: 'contain'
    },
    card: {
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
    card2: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: color.dodgerBlue,
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

});

export default styles;
