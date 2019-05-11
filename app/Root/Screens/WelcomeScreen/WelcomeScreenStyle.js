import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from "../../../Theme";

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderColor: '#d0d0d0'

        },
        progressContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
        },
        cardView: {
            padding: 10,
            margin: 5,
            backgroundColor: '#ffffff',
            borderColor: '#d0d0d0',
            borderWidth: 0.5,
            elevation: 5

        },
        shadow: {
            backgroundColor: '#2E9298',
            borderRadius: 10,
            padding: 10,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        }
        ,

        imageContainer:
            {
                flex: 1,
                alignItems:
                    'center',
                marginBottom:
                    10,
                justifyContent:
                    'center',
                backgroundColor:
                    '#ffffff',
            }
        ,

        image: {
            position: 'absolute',
            left: 15,
            top: 15
        },
        textTitle: {
            color: '#000000',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 15
        },
        line: {
            backgroundColor: '#d0d0d0',
            height: 1
        },
        bottomiew: {
            position: 'absolute',
            bottom: 10,
            left: 10,
        },
        chatInput: {width: '80%', borderColor: '#d0d0d0', borderWidth: 1, margin: 3, padding: 10},
        innerChat: {
            flexDirection: 'row', flex: 1
        },
        wrapper: {},
        slide1: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color.white,
            padding: 25
        },
        textHeader: {
            color: color.dodgerBlue,
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 50,
            marginBottom: 15,
            textAlign: 'center'
        }, textDetails: {
            color: color.dodgerBlue,
            fontSize: 14,
            marginBottom: 15,
            textAlign: 'center'
        },
        skiptext: {
            color: color.black,
            fontSize: 16,
            padding:20
        }
    })
;


export default styles;
