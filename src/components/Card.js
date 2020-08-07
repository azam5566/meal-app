import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Card({ item, onCardPress }) {
  return (
    <TouchableHighlight onPress={(e) => onCardPress(e)}>
      <View style={styles.card__container}>
        <ImageBackground
          source={{ uri: item.imageUrl }}
          style={{ height: 280 }}
          loadingIndicatorSource={
            <Text style={{ color: 'white' }}>Loading</Text>
          }
          resizeMode='cover'
        >
          <Text style={styles.card__text}>{item.title}</Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
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
    bottom: 12,
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
