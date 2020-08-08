import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { SET_FAVOURITE } from '../utils/reducer';
import LottieView from 'lottie-react-native';
import Demo from './Demo';

export default function Food({ navigation, route }) {
  const food = route.params;
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  var favourites = useSelector((store) => store.root.favourites);
  const isDemoDone = useSelector((store) => store.root.isDemoDone);

  function handleFavourite() {
    if (favourites.includes(food.id)) {
      favourites = favourites.filter((id) => id !== food.id);
    } else {
      favourites.push(food.id);
    }
    dispatch({
      type: SET_FAVOURITE,
      data: favourites,
    });
    setIsFavourite(!isFavourite);
  }

  useEffect(() => {
    setIsFavourite(favourites.includes(food.id));
  }, []);

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.rootWrapper}>
          <ImageBackground
            source={{ uri: food.imageUrl }}
            style={styles.imageBackgroundStyle}
          >
            <Ionicons
              name='ios-arrow-back'
              size={24}
              onPress={(e) => {
                navigation.goBack();
              }}
              color='white'
              style={styles.backIconStyle}
            />
            <MaterialCommunityIcons
              name='star'
              color={isFavourite ? 'red' : 'rgba(255, 255, 255, 0.65)'}
              size={36}
              style={styles.favIconStyle}
              onPress={() => handleFavourite()}
            />
          </ImageBackground>
          <Text style={styles.title}>{food.title}</Text>

          <View
            style={{
              display: 'flex',
              backgroundColor: 'white',
              marginLeft: 14,
              marginRight: 14,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            {Platform.OS === 'ios' && (
              <LottieView
                autoPlay={true}
                style={styles.lottie}
                source={require('../assets/bowl.json')}
              />
            )}

            <Text style={styles.cardTitle}>Ingredients</Text>
            {food.ingredients.map((ingd, index) => (
              <Text style={styles.cardText} key={index}>
                {ingd}
              </Text>
            ))}
          </View>
          <View
            style={{
              display: 'flex',
              backgroundColor: 'white',
              marginLeft: 14,
              marginRight: 14,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {Platform.OS === 'ios' && (
              <LottieView
                autoPlay={true}
                style={styles.lottiePan}
                source={require('../assets/pan-food.json')}
              />
            )}

            <Text style={styles.cardTitle}>Steps</Text>
            {food.steps.map((step, index) => (
              <Text style={styles.cardText} key={index}>
                {step}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
      {!isDemoDone && <Demo />}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: { backgroundColor: 'black' },
  rootWrapper: { display: 'flex', flex: 1, backgroundColor: 'black' },
  imageBackgroundStyle: { width: '100%', height: 350, display: 'flex' },
  backIconStyle: {
    position: 'absolute',
    paddingLeft: 18,
    paddingRight: 20,
    top: 50,
    left: 0,
  },
  favIconStyle: {
    position: 'absolute',
    right: 14,
    top: 50,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 18,
  },
  lottie: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 15,
    top: 0,
  },
  cardWrapper: {
    fontSize: 24,
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  cardText: {
    color: '#171717',
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 20,
    paddingBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  lottiePan: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: 15,
    top: -5,
  },
});
