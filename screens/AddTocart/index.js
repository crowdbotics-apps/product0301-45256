import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>Product Name</Text>
        <Text style={styles.productDescription}>Product Description</Text>
        <View style={styles.quantityContainer}>
          <Button title="-" onPress={decreaseQuantity} />
          <Text style={styles.quantity}>{quantity}</Text>
          <Button title="+" onPress={increaseQuantity} />
        </View>
        <Button title="Add to Cart" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productDetails: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  quantity: {
    fontSize: 16
  }
});
export default ProductDetails;