import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const defaultNavOptions = {
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTitleStyle: { fontFamily: 'open-sans-bold' },
  headerBackTitleStyle: { fontFamily: 'open-sans' },
};

const ProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Products"
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
        }}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Your Cart',
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
          title: 'Your Orders',
        }}
      />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Add"
        component={UserProductsScreen}
        options={{
          title: 'Add Product',
        }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{
          title: 'Edit Product',
        }}
      />
    </Stack.Navigator>
  );
};

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={ProductsNavigator}
        drawerContentOptions={{ activeTintColor: Colors.primary }}
      >
        <Drawer.Screen
          name="Products"
          component={ProductsNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={23}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                size={23}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Admin"
          component={AdminNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                size={23}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
