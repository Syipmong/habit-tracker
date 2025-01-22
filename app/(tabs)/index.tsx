import HeaderTask from "@/components/HeaderTask";
import TaskCards from "@/components/TaskCards";
import WeekDays from "@/components/WeekDays";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const AppBackground = require('../../assets/images/app-background.jpg'); 

export default function Home(){
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    blurContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
    },
    safeZone: {
      flex: 1,
    }
  });
  
  return (
    <>
    <StatusBar style="light"/>
    <SafeAreaView style={styles.safeZone}>
    <View style={styles.container}>
      <Image source={AppBackground} style={styles.image} />
      <BlurView intensity={30} style={styles.blurContainer}>
        <ScrollView>
        <HeaderTask/>
        <WeekDays/>
        <TaskCards/>
        </ScrollView>
      </BlurView>
    </View>
    </SafeAreaView>
  
    </>
  )
}