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
    },innerContainer:{
        flexDirection: 'row'
    }

});

export default styles;
