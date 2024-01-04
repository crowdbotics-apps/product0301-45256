import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, Image, Button } from "react-native";

const ProductDetails = ({
  route,
  navigation
}) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const {
      id
    } = route.params;
    fetch('https://my-json-server.typicode.com/demo/products').then(response => response.json()).then(data => {
      const selectedProduct = data.find(item => item.id === id);
      setProduct(selectedProduct);
    });
  }, []);

  const addToCart = () => {
    // Add to cart functionality here
    // Then navigate to cart screen
    navigation.navigate('Cart');
  };

  if (!product) {
    return null;
  }

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Image style={styles.image} source={{
        uri: product.images[0]
      }} />
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.stock}>In Stock: {product.stock}</Text>
        <Text style={styles.rating}>Rating: {product.rating}</Text>
        <Button title="Add to Cart" onPress={addToCart} style={styles.button} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  contentContainer: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  stock: {
    fontSize: 16,
    marginBottom: 10
  },
  rating: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5
  }
});
export default ProductDetails;