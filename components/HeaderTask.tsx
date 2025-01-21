import { useColorScheme } from "@/hooks/useColorScheme.web";
import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function HeaderTask(){
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark'? '#333': '#fff',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '90%',
            margin: 20,
            padding: 20,
            borderRadius: 20,
        },
        text: {
            fontSize: 20,
            textAlign: 'center',
            color: colorScheme === 'dark'? '#fff': '#333',
        },
        nameText: {
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
        }
    })


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Back, Hana</Text>
            <Text>You have completed 4 tasks today</Text>
            
        </View>
    )
}