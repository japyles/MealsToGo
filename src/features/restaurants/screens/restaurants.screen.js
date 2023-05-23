import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16pz;
`;

const RestaurantListContainer = styled.View`
  padding: 16px;
  flex: 1;
  background-color: papayawhip;
`;

export const RestaurantsScreen = () => {
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder='Search' />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>;
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
