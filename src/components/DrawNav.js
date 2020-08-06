import * as React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
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

function handleLeftClick(navigation) {
  navigation.toggleDrawer();
  console.log('helll');
}

function Filters({ navigation }) {
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
        onRightImagePressed={() => {}}
      />
    </Screen>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'black' }}>
      <DrawerItemList
        {...props}
        inactiveTintColor={'white'}
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
      <Drawer.Screen name='My Favourites' component={Favourite} />
      <Drawer.Screen name='Filters' component={Filters} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return <MyDrawer />;
}
