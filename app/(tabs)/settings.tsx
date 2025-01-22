import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Settings() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    
    return (
        <View style={styles.container}>
            <Text className="3xl color-blue-200">Settings</Text>
        </View>
    )
}