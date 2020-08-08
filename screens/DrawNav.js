import * as React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  Switch,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Favourite from './Favourite';
import Screen from '../components/Screen';
import Header from '../components/Header';
import CardMenu from '../components/CardMenu';

import LottieView from 'lottie-react-native';
import Home from './Home';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function handleLeftClick(navigation) {
  navigation.toggleDrawer();
}

function Filters({ navigation }) {
  const [isGlutenFree, setIsGlutenFree] = React.useState(false);
  const [isLactoseFree, setIsLactoseFree] = React.useState(false);
  const [isVegan, setIsVegan] = React.useState(false);
  const [isVegetarian, setIsVegetarian] = React.useState(false);
  const [isFiltered, setIsFiltered] = React.useState(true);

  const categories = useSelector((store) => store.root.categories);
  const meals = useSelector((store) => store.root.meals);

  const [filteredMeal, setFilteredMeal] = React.useState([]);

  const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1].id == sorted_arr[i].id) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  };

  function compare(arr1, arr2) {
    let finalArr = [];
    arr1.forEach((meal1) =>
      arr2.forEach((meal2) => {
        if (meal1.id === meal2.id) {
          finalArr.push(meal1);
        }
      })
    );
    return finalArr;
  }

  function filterItems() {
    setFilteredMeal([]);

    var selectedFil = [];
    if (isGlutenFree) {
      selectedFil.push('isGlutenFree');
    }
    if (isLactoseFree) {
      selectedFil.push('isLactoseFree');
    }
    if (isVegan) {
      selectedFil.push('isVegan');
    }
    if (isVegetarian) {
      selectedFil.push('isVegetarian');
    }

    if (selectedFil.length === 0) {
      setFilteredMeal(meals);
    }

    var list = [];
    selectedFil.map((it, index) => {
      if (index === 0) {
        list = meals.filter((meal) => meal[it] === true);
      } else {
        list = list.filter((meal) => meal[it] === true);
      }
      setFilteredMeal(list);
    });
    setIsFiltered(!isFiltered);
  }

  return (
    <>
      {isFiltered ? (
        <Screen style={{ flex: 1, backgroundColor: '#000' }}>
          <StatusBar translucent={true} style='inverted' />
          <Header
            leftImage='menu'
            rightImage='more-vertical'
            text='Filters'
            onLeftImagePressed={(e) => {
              handleLeftClick(navigation);
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 50,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Gluten-Free</Text>
            <Switch
              trackColor={{ false: '#eaeaea', true: '#81b0ff' }}
              thumbColor={isGlutenFree ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#eaeaea'
              onValueChange={() => setIsGlutenFree(!isGlutenFree)}
              value={isGlutenFree}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 30,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Lactose-Free</Text>
            <Switch
              trackColor={{ false: '#eaeaea', true: '#81b0ff' }}
              thumbColor={isLactoseFree ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#eaeaea'
              onValueChange={() => setIsLactoseFree(!isLactoseFree)}
              value={isLactoseFree}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 30,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Vegan</Text>
            <Switch
              trackColor={{ false: '#eaeaea', true: '#81b0ff' }}
              thumbColor={isVegan ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#eaeaea'
              onValueChange={() => setIsVegan(!isVegan)}
              value={isVegan}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 30,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Vegetarian</Text>
            <Switch
              trackColor={{ false: '#eaeaea', true: '#81b0ff' }}
              thumbColor={isVegetarian ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#eaeaea'
              onValueChange={() => setIsVegetarian(!isVegetarian)}
              value={isVegetarian}
            />
          </View>

          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 30,
              marginRight: 30,
              marginTop: 50,
              paddingTop: 8,
              paddingBottom: 8,
              backgroundColor: '#0c3b22',
              borderRadius: 5,
            }}
            onPress={() => filterItems()}
          >
            <Text style={{ color: '#16a156', fontSize: 20 }}>Filter Meal</Text>
          </TouchableOpacity>

          {Platform.OS === 'ios' && (
            <LottieView
              autoPlay={true}
              style={{
                width: 200,
                height: 200,
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
              }}
              source={require('../assets/food.json')}
            />
          )}
        </Screen>
      ) : (
        <Screen style={{ flex: 1, backgroundColor: '#000' }}>
          <FlatList
            data={filteredMeal}
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
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 14,
              marginRight: 14,
              marginTop: 10,
              paddingTop: 8,
              paddingBottom: 8,
              backgroundColor: '#3d0f01',
              borderRadius: 5,
              marginBottom: 10,
            }}
            onPress={() => filterItems()}
          >
            <Text style={{ color: 'red', fontSize: 20 }}>Change Filters</Text>
          </TouchableOpacity>
        </Screen>
      )}
    </>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'black' }}>
      <DrawerItemList
        {...props}
        inactiveTintColor={'white'}
        labelStyle={{ fontSize: 20 }}
        itemStyle={{ justifyContent: 'center', alignItems: 'center' }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={'Home'}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Filters' component={Filters} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return <MyDrawer />;
}
