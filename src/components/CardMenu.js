import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

export default function Card({ item, onPress }) {
  return (
    <TouchableOpacity
      onPress={(e) => {
        onPress(e);
      }}
      style={styles.card__container}
    >
      <Text style={styles.text_style}>{item.name.substring(0, 1)}</Text>
      <Text style={styles.text_subStyle}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card__container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 12,
    height: 160,
    marginBottom: 12,
    width: '44%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text_style: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text_subStyle: {
    textAlign: 'center',
    color: 'white',
  },
});
