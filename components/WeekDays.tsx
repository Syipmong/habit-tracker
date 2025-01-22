import { useColorScheme } from "@/hooks/useColorScheme.web";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sa", "Sun"];

export default function WeekDays() {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row',
            borderRadius: 18,
            
        },
        text: {
            fontSize: 16,
            textAlign: 'center',
            color: colorScheme === 'dark' ? '#fff' : '#333',
            // width: '20%',
            // height: '40%',
            padding: 10,
            // borderRadius: 18,
            margin: 5,
            backgroundColor: '#f3f3f3',
            
        }
    });

    return (
        <View style={styles.container}>
            {daysOfWeek.map((day) => (
                <Text key={day} style={styles.text}>{day}</Text>
            ))}
        </View>
    );
}
