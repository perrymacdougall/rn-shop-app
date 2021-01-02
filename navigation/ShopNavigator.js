import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOptions = {
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
};

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={defaultNavOptions}>
        <Drawer.Screen name="Products" component={ProductsNavigator} />
        <Drawer.Screen name="Orders" component={OrdersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const ProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Products"
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
          headerTitleStyle: { fontFamily: 'open-sans-bold' },
          headerBackTitleStyle: { fontFamily: 'open-sans' },
        }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
          headerTitleStyle: { fontFamily: 'open-sans-bold' },
          headerBackTitleStyle: { fontFamily: 'open-sans' },
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
          headerTitleStyle: { fontFamily: 'open-sans-bold' },
          headerBackTitleStyle: { fontFamily: 'open-sans' },
        }}
      />
    </Stack.Navigator>
  );
};

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          title: 'Orders',
          headerTitleStyle: { fontFamily: 'open-sans-bold' },
          headerBackTitleStyle: { fontFamily: 'open-sans' },
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
