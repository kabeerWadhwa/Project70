import * as React from 'react'
import {Text, View, StyleSheet, Image, TextInput} from 'react-native'

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <TextInput>Story Title</TextInput>
                <TextInput>Author Name</TextInput>
                <TextInput>Write Story Here</TextInput>
            </View>
        );
    }
}