import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function DashboardScreen() {
  const handleLogout = () => {
    router.push('/sign-in');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Welcome to your main app!</Text>
        
        {/* Add logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📊 Analytics</Text>
          <Text style={styles.cardText}>View your stats and metrics</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📝 Recent Activity</Text>
          <Text style={styles.cardText}>See what's been happening</Text>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚡ Quick Actions</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Create New</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sakura.lightest, // Light pink background
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: Colors.sakura.darkest, // Dark pink header
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white, // White text on dark pink
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.white,
    opacity: 0.9,
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    alignSelf: 'flex-end',
    minWidth: 80,
  },
  logoutText: {
    color: Colors.sakura.darkest, // Dark pink text on white button
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: Colors.sakura.medium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: Colors.sakura.medium, // Pink accent border
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#64748b',
  },
  actionButton: {
    backgroundColor: Colors.sakura.medium, // Medium pink button
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  actionText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});