import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { SET_FAVOURITE } from './utils/reducer';
import LottieView from 'lottie-react-native';

export default function Food({ navigation, route }) {
  const food = route.params;
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  var favourites = useSelector((store) => store.root.favourites);

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
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ display: 'flex', flex: 1, backgroundColor: 'black' }}>
        <ImageBackground
          source={{ uri: food.imageUrl }}
          style={{ width: '100%', height: 350, display: 'flex' }}
        >
          <Ionicons
            name='ios-arrow-back'
            size={24}
            onPress={(e) => {
              navigation.goBack();
            }}
            color='white'
            style={{
              position: 'absolute',
              paddingLeft: 18,
              paddingRight: 20,
              top: 50,
              left: 0,
            }}
          />
          <MaterialCommunityIcons
            name='star'
            color={isFavourite ? 'red' : 'rgba(255, 255, 255, 0.65)'}
            size={36}
            style={{
              position: 'absolute',
              right: 14,
              top: 50,
            }}
            onPress={() => handleFavourite()}
          />
        </ImageBackground>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            fontWeight: '700',
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 18,
          }}
        >
          {food.title}
        </Text>

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
          <LottieView
            autoPlay={true}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              left: 15,
              top: 0,
            }}
            source={require('../../assets/bowl.json')}
          />
          <Text
            style={{
              fontSize: 24,
              display: 'flex',
              textAlign: 'center',
              width: '100%',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Ingredients
          </Text>
          {food.ingredients.map((ingd, index) => (
            <Text
              style={{
                color: '#171717',
                fontSize: 16,
                paddingLeft: 20,
                paddingRight: 20,
                lineHeight: 20,
                paddingBottom: 20,
              }}
              key={index}
            >
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
          <LottieView
            autoPlay={true}
            style={{
              width: 80,
              height: 80,
              position: 'absolute',
              left: 15,
              top: -5,
            }}
            source={require('../../assets/pan-food.json')}
          />
          <Text
            style={{
              fontSize: 24,
              display: 'flex',
              textAlign: 'center',
              width: '100%',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Steps
          </Text>
          {food.steps.map((step, index) => (
            <Text
              style={{
                color: '#171717',
                fontSize: 16,
                paddingLeft: 20,
                paddingRight: 20,
                lineHeight: 20,
                paddingBottom: 20,
              }}
              key={index}
            >
              {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
