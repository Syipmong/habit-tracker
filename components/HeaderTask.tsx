import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function HeaderTask(){

    const colorScheme = useColorScheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 50,
            paddingLeft: 20,
            marginTop: 50,
            alignItems: 'flex-start',
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
            color: colorScheme === 'dark' ? 'white' : 'black',
            width: '90%',
            borderRadius: 18,
        }
    })
    return (
        <View style={styles.container}>
            <Text className="text-3xl text-center color-green-500">Home Tasks</Text>
        </View>
    )
}