import React from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderColor: '#d0d0d0',
            alignItems: 'center',
            justifyContent: 'center',

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
        },
        image: {
            margin: 10
        },
        textTitle: {
            color: '#000000',
            fontWeight:
                'bold',
            textAlign:
                'center',
            padding:
                15
        }
        ,
        text: {
            color: '#ffffff',
            fontWeight:
                'bold',
            padding:
                5
        }, progressView: {
            height: 100, width: 100, marginTop: 100
        }, line: {backgroundColor: '#d0d0d0', height: 1},
        imageCardView: {
            elevation: 3,
            backgroundColor: '#000',
            height: 150,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            padding: 5,
            borderRadius: 10, resizeMode: 'contain'
        }
    })
;


export default styles;
