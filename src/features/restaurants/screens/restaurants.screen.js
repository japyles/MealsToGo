import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantsScreen = () => {
  <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <View style={styles.search}>
      <SearchBar placeholder='Search' />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: 'coral',
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: 'aqua',
  },
});
