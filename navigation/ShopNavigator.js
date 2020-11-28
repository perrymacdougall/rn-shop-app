import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
          },
        }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsOverviewScreen}
          options={{ title: 'All Products' }}
        />
        <Stack.Screen
          name="Details"
          component={ProductDetailScreen}
          options={({ route }) => ({ title: route.params.productTitle })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
