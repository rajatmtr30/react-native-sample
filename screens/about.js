import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../assets/styles/global';

export default function About({navigation}){
    return(
        <View style= {globalStyles.container}>
            <Text>About Screen</Text>
        </View>
    )
}
