import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

const ProductDetailScreen = ({ navigation, route }) => {
  const { productId } = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};

export default ProductDetailScreen;
