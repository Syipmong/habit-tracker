import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'This is task 1',
        completed: false
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'This is task 2',
        completed: true
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'This is task 3',
        completed: false
    }
];

export default function TaskCards(){
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        }
    })
    return(
        <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        
        >

        </LinearGradient>
    )
}