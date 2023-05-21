import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <View style={styles.search}>
      <Searchbar placeholder='Search' />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: 'papayawhip',
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: 'aqua',
  },
});
