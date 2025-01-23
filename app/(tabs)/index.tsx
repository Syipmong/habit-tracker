import { Habit_Tracker_Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";

export default function Home() {
  const colorScheme = useColorScheme();
  const user = 'Yipmong';
  const date = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateDates = () => {
    const dates = [];
    for (let i = -3; i <= 4; i++) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + i);
      dates.push({
        day: daysOfWeek[newDate.getDay()],
        date: newDate.getDate(),
      });
    }
    return dates;
  };

  const dates = generateDates();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'flex-start',
      backgroundColor:
        colorScheme === "dark"
          ? Habit_Tracker_Colors.gray.dark
          : Habit_Tracker_Colors.gray.light,
    },
    header: {
      width: '95%',
      height: 156,
      backgroundColor: Habit_Tracker_Colors.primary,
      borderRadius: 18,
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
    },
    calendarContainer: {
      width: '95%',
      height: 100,
      // backgroundColor: Habit_Tracker_Colors.secondary,
      borderRadius: 18,
      marginTop: 10,
    },
    taskListContainer: {
      width: '95%',
      height: 480,
      marginTop: 10,
      borderRadius: 18,
      backgroundColor: Habit_Tracker_Colors.secondary,
    },
    userText: {
      fontSize: 20,
      color: Habit_Tracker_Colors.gray.light,
      textAlign: 'left',
      paddingLeft: 10,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>
          Welcome back, {user}
        </Text>
        <Text style={{fontSize: 18, color: Habit_Tracker_Colors.gray.light, paddingLeft: 10}}>
          Complete 3/4 tasks today
        </Text>
      </View>
      <View style={styles.calendarContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }}>
          {dates.map(({ day, date }, index) => (
            <View key={index} style={{ backgroundColor: Habit_Tracker_Colors.gray.light, padding: 20, margin: 5, borderRadius: 18 }}>
              <Text style={{ color: Habit_Tracker_Colors.gray.dark, fontSize: 16 }}>
                {day}
              </Text>
              <Text>
                {date}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.taskListContainer}>
        {/* Task list content */}
      </View>
    </SafeAreaView>
  );
}
