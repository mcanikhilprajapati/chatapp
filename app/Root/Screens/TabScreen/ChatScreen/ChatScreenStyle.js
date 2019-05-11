import {StyleSheet} from "react-native";
import {color} from "../../../../Theme";

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
        top: 45,
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

});

export default styles;
