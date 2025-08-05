import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';  // ← Add this import


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6366f1',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"  // ← This is your HOME tab (default)
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