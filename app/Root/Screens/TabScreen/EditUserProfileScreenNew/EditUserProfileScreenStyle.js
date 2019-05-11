import {StyleSheet} from "react-native";
import {color} from "../../../../Theme";


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 25
    },
    container2: {
        flex: 1,
        height: 20,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#ffffff',
        marginTop: -90,
        marginBottom: 10,
        borderColor: color.primary,
        borderRadius: 10,
        borderWidth: 0.5,
        padding: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    container: {
        height: 150,
        alignItems: 'center',
        backgroundColor: color.primary,
    },
    containerTop: {
        flex: 1, padding: 10,

    },
    image: {
        height: 100,
        width:100,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius:50
    },
    text: {
        color: '#000',
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: 20
    }, textInput: {
        color: '#000',
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        padding: 10
    }, buttonStyle: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#d6d7da',
        backgroundColor: 'transparent'
    },

    buttonstylelogin: {
        width: 200,
        alignSelf: 'center',
        backgroundColor: color.white,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: color.skyblue,
        marginTop: 20,
        marginBottom: 15
    },
    innerButton: {
        backgroundColor: color.skyblue,
        alignItems: 'center',
        margin: 5,
        borderRadius: 20,
        padding: 2,
        color: color.white,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }, imageRight: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 15,
        bottom: 15,
        padding: 5,
        zIndex: 3
    },
    labelError: {
        color: '#ff041f', textAlign: 'center', fontSize: 12
    },
    loaderStyle: {
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#220a9c99',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, zIndex: 2
    },
    progressView: {
        height: 100, width: 100
    },
    forgotpasswordContainer: {
        padding: 10,

    },
    inputContainerStyle: {
        marginTop: 10,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: color.primary
    },
    inputStyle: {
        width: '100%',
        backgroundColor: '#ffffff',
        marginBottom: 5
    }


});

export default styles;
