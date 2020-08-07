import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import Screen from './Screen';
import Header from './Header';
import Card from './Card';

export default function FoodList({ navigation, route }) {
  const foodList = route.params;

  return (
    <Screen style={styles.container}>
      <StatusBar translucent={true} style='inverted' />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 5,
          paddingBottom: 5,
          alignItems: 'center',
          height: 50,
          backgroundColor: '#171717',
        }}
      >
        <Ionicons
          name='ios-arrow-back'
          size={24}
          onPress={(e) => {
            navigation.goBack();
          }}
          color='white'
          style={{
            paddingLeft: 20,
            paddingRight: 20,
          }}
        />
        <Text style={{ color: 'white', fontSize: 20 }}>Food List</Text>
      </View>
      <FlatList
        data={foodList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            item={item}
            onCardPress={() => navigation.navigate('Food', item)}
          />
        )}
        keyExtractor={(user) => user.id.toString()}
        numColumns={1}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight,
  },
});
