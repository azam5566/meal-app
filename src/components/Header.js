import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Header({
  leftImage,
  rightImage,
  text,
  onLeftImagePressed,
  onRightImagePressed,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.logo__wrapper}>
        <TouchableHighlight
          onPress={(e) => {
            onLeftImagePressed(e);
          }}
        >
          <MaterialCommunityIcons name={leftImage} size={24} color='white' />
        </TouchableHighlight>
        <Text style={styles.logo__text}>{text}</Text>
      </View>
      <Feather
        name={rightImage}
        size={24}
        color='white'
        style={styles.header__right}
        onPress={(e) => {
          onRightImagePressed(e);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#171717',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__right: {
    marginRight: 16,
  },
  logo__wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 16,
  },
  logo__text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
});
