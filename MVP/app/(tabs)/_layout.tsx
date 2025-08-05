import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';  // ← Add this import
import { Colors } from '@/constants/Colors';



export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.sakura.darkest,    // Active tab color
        tabBarInactiveTintColor: Colors.gray.medium,     // Inactive tab color
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.sakura.lightest,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ color, fontSize: 20 }}>
              {focused ? '🏠' : '🏡'}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ color, fontSize: 20 }}>
              {focused ? '🔍' : '🔎'}
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}