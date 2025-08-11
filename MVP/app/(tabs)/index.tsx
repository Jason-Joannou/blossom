import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { FavoriteGroupCard } from "@/components/ui/favouriteGroupCard";
import { FavouriteGroup } from "../lib/interfaces/groups";

const { width } = Dimensions.get("window");

export default function DashboardScreen() {
  const favoriteGroupsRef = useRef(null);

  // Dummy data for favorite groups
  const favoriteGroups: FavouriteGroup[] = [
    {
      id: 1,
      name: "Work Squad",
      members: ["Alex", "Sarah", "Mike"],
      lastDined: "Olive Garden",
      avatar: "👥",
    },
    {
      id: 2,
      name: "College Friends",
      members: ["Emma", "Jake", "Lisa", "Tom"],
      lastDined: "Chipotle",
      avatar: "🎓",
    },
    {
      id: 3,
      name: "Family Dinners",
      members: ["Mom", "Dad", "Sister"],
      lastDined: "Red Lobster",
      avatar: "👨‍👩‍👧",
    },
    {
      id: 4,
      name: "Date Nights",
      members: ["You", "Partner"],
      lastDined: "Fancy Steakhouse",
      avatar: "💕",
    },
    {
      id: 5,
      name: "Gym Buddies",
      members: ["Chris", "Jordan", "Sam"],
      lastDined: "Protein Bar",
      avatar: "💪",
    },
    // Duplicate for infinite scroll effect
    {
      id: 6,
      name: "Work Squad",
      members: ["Alex", "Sarah", "Mike"],
      lastDined: "Olive Garden",
      avatar: "👥",
    },
    {
      id: 7,
      name: "College Friends",
      members: ["Emma", "Jake", "Lisa", "Tom"],
      lastDined: "Chipotle",
      avatar: "🎓",
    },
  ];

  const handleLogout = () => {
    router.push("/sign-in");
  };

  const handleMenuPress = () => {
    // Handle hamburger menu press - could open drawer, modal, etc.
    console.log("Menu pressed");
  };

  const handleCreateGroup = () => {
    router.push("/create-group");
  };

  const handleJoinGroup = () => {
    router.push("/join-group");
  };

  const handleViewHistory = () => {
    router.push("/history");
  };

  const handleGroupPress = (group: FavouriteGroup) => {
    console.log("Selected group:", group.name);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.sakura.darkest}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Simple Header with Hamburger Menu */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            {/* Brand Section */}
            <View style={styles.brandContainer}>
              <Text style={styles.logoEmoji}>🌸</Text>
              <Text style={styles.title}>Blossom</Text>
            </View>

            {/* Hamburger Menu */}
            <TouchableOpacity
              style={styles.menuButton}
              onPress={handleMenuPress}
            >
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Favorite Groups Infinite Scroller */}
        <View style={styles.favoriteGroupsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Favorite Groups</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={favoriteGroups}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <FavoriteGroupCard
                group={item}
                onPress={(group) => console.log("Selected group:", group.name)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width * 0.8 + 12}
            decelerationRate="fast"
            contentContainerStyle={styles.favoriteGroupsList}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          />
        </View>

        {/* Quick Actions Section */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.actionGrid}>
            <TouchableOpacity
              style={styles.primaryActionCard}
              onPress={handleCreateGroup}
            >
              <View style={styles.actionIconContainer}>
                <Text style={styles.actionEmoji}>➕</Text>
              </View>
              <Text style={styles.primaryActionTitle}>Create Group</Text>
              <Text style={styles.primaryActionText}>
                Start a new bill split
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryActionCard}
              onPress={handleJoinGroup}
            >
              <View style={styles.actionIconContainer}>
                <Text style={styles.actionEmoji}>👥</Text>
              </View>
              <Text style={styles.secondaryActionTitle}>Join Group</Text>
              <Text style={styles.secondaryActionText}>Enter group code</Text>
            </TouchableOpacity>
          </View>

          {/* Dashboard Cards */}
          <Text style={styles.sectionTitle}>Overview</Text>

          <TouchableOpacity style={styles.card} onPress={handleViewHistory}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>💳 Recent Transactions</Text>
              <Text style={styles.cardArrow}>→</Text>
            </View>
            <Text style={styles.cardText}>
              View your payment history and splits
            </Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>
                Last payment: 2 days ago
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>📊 This Month</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>$247.50</Text>
                <Text style={styles.statLabel}>Total Split</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>8</Text>
                <Text style={styles.statLabel}>Groups Joined</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.sakura.darkest,
  },
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: Colors.sakura.darkest,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoEmoji: {
    fontSize: 28,
    marginRight: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.white,
  },
  menuButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  menuLine: {
    width: 24,
    height: 3,
    backgroundColor: Colors.white,
    marginVertical: 2,
    borderRadius: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e293b",
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.sakura.medium,
    fontWeight: "600",
  },
  favoriteGroupsSection: {
    paddingTop: 20,
    paddingBottom: 8,
    backgroundColor: '#f8fafc',
  },
  favoriteGroupsList: {
    paddingHorizontal: 20,
  },
  groupAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.sakura.lightest,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  groupAvatarText: {
    fontSize: 24,
  },
  groupInfo: {
    flex: 1,
    marginBottom: 12,
  },
  groupName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 4,
  },
  groupMembers: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 2,
  },
  groupLastDined: {
    fontSize: 12,
    color: "#94a3b8",
  },
  groupAction: {
    backgroundColor: Colors.sakura.light,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  groupActionText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.sakura.darkest,
  },
  content: {
    padding: 20,
  },
  actionGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 32,
  },
  primaryActionCard: {
    flex: 1,
    backgroundColor: Colors.sakura.medium,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: Colors.sakura.medium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  secondaryActionCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: Colors.sakura.light,
  },
  actionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  actionEmoji: {
    fontSize: 24,
  },
  primaryActionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.white,
    marginBottom: 4,
  },
  primaryActionText: {
    fontSize: 12,
    color: Colors.white,
    opacity: 0.9,
    textAlign: "center",
  },
  secondaryActionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.sakura.darkest,
    marginBottom: 4,
  },
  secondaryActionText: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: Colors.sakura.medium,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
  },
  cardArrow: {
    fontSize: 18,
    color: Colors.sakura.medium,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
  cardFooter: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
  },
  cardFooterText: {
    fontSize: 12,
    color: "#94a3b8",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.sakura.darkest,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#e2e8f0",
    marginHorizontal: 16,
  },
});
