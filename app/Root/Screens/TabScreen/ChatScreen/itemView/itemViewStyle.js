import {StyleSheet} from "react-native";
import {color} from "../../../../../Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        padding: 10,
        borderRadius:15,
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
        marginBottom: 15
    },
    innerContainer:{
        flexDirection: 'row'
    },
    messageCount:{
        height:20,width:20,
        position: 'absolute',
        right: 5,
        top:45,
        alignSelf: 'center',
        fontSize: 12,
        backgroundColor: color.dodgerBlue,
        color: color.white,
        borderRadius: 10,
        alignItems: 'center'
    },
    timelabel:{
        position: 'absolute',
        right: 5,
        height: 60,
        alignSelf: 'center',
        fontSize: 12,
        color: '#c8c8c8',
    }

});

export default styles;
