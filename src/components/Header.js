import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

import LottieView from 'lottie-react-native';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function Header({
  leftImage,
  rightImage,
  text,
  onLeftImagePressed,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.logo__wrapper}>
        <TouchableHighlight
          onPress={(e) => {
            onLeftImagePressed(e);
          }}
        >
          {leftImage === 'food-fork-drink' ? (
            <LottieView
              autoPlay={true}
              style={{
                width: 50,
                height: 50,
                marginLeft: 3,
              }}
              source={require('../../assets/food.json')}
            />
          ) : (
            <MaterialCommunityIcons
              name={leftImage}
              size={24}
              style={{
                marginLeft: 18,
                marginRight: 8,
              }}
              color='white'
            />
          )}
        </TouchableHighlight>

        <Text style={styles.logo__text}>{text}</Text>
      </View>

      <Menu>
        <MenuTrigger>
          <Feather
            name={rightImage}
            size={24}
            color='white'
            style={styles.header__right}
          />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{ backgroundColor: '#3d0f01' }}>
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text
              style={{
                color: 'red',
                fontSize: 20,
                textAlign: 'center',
                margin: 5,
              }}
            >
              LogOut
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo__text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
});
