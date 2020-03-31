import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';
import {globalStyles} from '../assets/styles/global';

export default function Home({navigation}){

    const[reviews,setReviews]=useState([
        {title:'Good News', rating:4, body:'A Movie of Akshay Kumar', Key:1},
        {title:'KGF', rating:5, body:'South Indian BlockBuster movie', Key:2},
        {title:'3 Idiots', rating:10, body:'Engineers Movie must watch ', Key:3},
        {title:'Jeene nahi dunga', rating:5, body:'South Action Movie', Key:4}
    ])

    return(
        <View style= {globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            <FlatList
            data={reviews}
            renderItem={({item})=> (
<TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
    <Text style={globalStyles.titleText}>{item.title}</Text>
</TouchableOpacity>
            )}
            />
        </View>

    )
}
