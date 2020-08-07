import * as React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  Switch,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Favourite from './Favourite';
import Screen from './Screen';
import Header from './Header';

import LottieView from 'lottie-react-native';
import Home from './Home';
import { useSelector } from 'react-redux';

function handleLeftClick(navigation) {
  navigation.toggleDrawer();
}

function Filters({ navigation }) {
  const [isGlutenFree, setIsGlutenFree] = React.useState(false);
  const [isLactoseFree, setIsLactoseFree] = React.useState(false);
  const [isVegan, setIsVegan] = React.useState(false);
  const [isVegetarian, setIsVegetarian] = React.useState(false);

  const categories = useSelector((store) => store.root.categories);
  const meals = useSelector((store) => store.root.meals);

  function filterItems() {
    var filteredMeal = [];
    if (isGlutenFree) {
      filteredMeal = meals.filter((meal) => meal.isGlutenFree === isGlutenFree);
    }
    console.log('====================================');
    console.log(filteredMeal);
    console.log('====================================');
    navigation.goBack();
    navigation.navigate('Home');
  }

  return (
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
          source={require('../../assets/food.json')}
        />
      )}
    </Screen>
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
