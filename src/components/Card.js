import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

export default function Card({ item }) {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.card__container}>
      <ImageBackground
        source={{ uri: item.image }}
        style={{ height: 280 }}
        resizeMode='cover'
      >
        <Text style={styles.card__text}>Biryani</Text>
        <Text numberOfLines={1} style={styles.card__subtext}>
          Lucknow Mutton Dum Biryani made with indian spicies
        </Text>
        <MaterialCommunityIcons
          name='star'
          color={clicked ? 'red' : '#171717'}
          size={36}
          style={styles.icon_container}
          onPress={() => {
            setClicked(!clicked);
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card__container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 18,
  },
  card__text: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    position: 'absolute',
    bottom: 32,
    left: 10,
  },
  card__subtext: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  icon_container: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  text_container: {
    flex: 1,
    paddingStart: 16,
    paddingLeft: 16,
  },
});
