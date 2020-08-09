import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { DEMO } from '../utils/reducer';

export default function Demo() {
  const [favDone, setFavDone] = useState(false);
  const [isAllDone, setIsAllDone] = useState(false);

  const dispatch = useDispatch();

  function handleAlldone() {
    setIsAllDone(true);
    dispatch({
      type: DEMO,
    });
  }

  return (
    <>
      {!isAllDone && (
        <>
          {!favDone ? (
            <View
              style={{
                position: 'absolute',
                display: 'flex',
                flex: 1,
                backgroundColor: 'rgba(255,255,255,0.81)',
                width: '100%',
                height: '100%',
              }}
            >
              <View
                style={{
                  width: 120,
                  height: 120,
                  position: 'absolute',
                  top: 15,
                  right: -25,
                  borderRadius: 60,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                }}
              />
              <View
                style={{
                  width: 80,
                  height: 80,
                  position: 'absolute',
                  top: 35,
                  right: -5,
                  borderRadius: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 3,
                }}
              />
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'black',
                  position: 'absolute',
                  top: 50,
                  right: 10,
                  borderRadius: 25,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name='star'
                  color={'rgba(255, 255, 255, 0.65)'}
                  size={36}
                />
              </View>
              <Text
                style={{
                  fontSize: 36,
                  color: 'black',
                  fontWeight: '600',
                  top: 140,
                  left: 60,
                }}
              >
                Favourite,
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: 'black',
                  fontWeight: '600',
                  top: 140,
                  left: 60,
                }}
              >
                mark meal as favourite.
              </Text>
              <TouchableOpacity
                style={{
                  width: 140,
                  height: 60,
                  backgroundColor: '#0c3b22',
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: -520,
                  right: -250,
                }}
                onPress={() => setFavDone(!favDone)}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: '#16a156',
                    fontWeight: '600',
                  }}
                >
                  Ok, Got it
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                position: 'absolute',
                display: 'flex',
                flex: 1,
                backgroundColor: 'rgba(255,255,255,0.81)',
                width: '100%',
                height: '100%',
              }}
            >
              <View
                style={{
                  width: 120,
                  height: 120,
                  position: 'absolute',
                  top: 15,
                  left: -25,
                  borderRadius: 60,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                }}
              />
              <View
                style={{
                  width: 80,
                  height: 80,
                  position: 'absolute',
                  top: 35,
                  left: -5,
                  borderRadius: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 3,
                }}
              />
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'black',
                  position: 'absolute',
                  top: 50,
                  left: 10,
                  borderRadius: 25,
                  display: 'flex',
                }}
              >
                <Ionicons
                  name='ios-arrow-back'
                  size={24}
                  color='white'
                  style={{ position: 'absolute', left: 18, top: 10 }}
                />
              </View>
              <Text
                style={{
                  fontSize: 36,
                  color: 'black',
                  fontWeight: '600',
                  top: 140,
                  left: 60,
                }}
              >
                Go Back,
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: 'black',
                  fontWeight: '600',
                  top: 140,
                  left: 60,
                }}
              >
                to previous screen.
              </Text>
              <TouchableOpacity
                style={{
                  width: 140,
                  height: 60,
                  backgroundColor: '#0c3b22',
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: -520,
                  right: -250,
                }}
                onPress={() => handleAlldone()}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: '#16a156',
                    fontWeight: '600',
                  }}
                >
                  Ok, Got it
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </>
  );
}
