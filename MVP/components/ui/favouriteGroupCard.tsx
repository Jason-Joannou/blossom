// components/FavoriteGroupCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { FavouriteGroup } from '@/app/lib/interfaces/groups';

const { width } = Dimensions.get('window');

interface Props {
  group: FavouriteGroup;
  onPress?: (group: FavouriteGroup) => void;
}

export const FavoriteGroupCard: React.FC<Props> = ({ group, onPress }) => (
  <TouchableOpacity
    style={styles.favoriteGroupCard}
    onPress={() => onPress?.(group)}
  >
    <View style={styles.groupAvatar}>
      <Text style={styles.groupAvatarText}>{group.avatar}</Text>
    </View>
    <View style={styles.groupInfo}>
      <Text style={styles.groupName}>{group.name}</Text>
      <Text style={styles.groupMembers}>{group.members.length} members</Text>
      <Text style={styles.groupLastDined}>Last: {group.lastDined}</Text>
    </View>
    <View style={styles.groupAction}>
      <Text style={styles.groupActionText}>Reorder</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  favoriteGroupCard: {
    width: width * 0.8,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: Colors.sakura.medium,
  },
  groupAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.sakura.lightest,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  groupMembers: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 2,
  },
  groupLastDined: {
    fontSize: 12,
    color: '#94a3b8',
  },
  groupAction: {
    backgroundColor: Colors.sakura.light,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  groupActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.sakura.darkest,
  },
});
