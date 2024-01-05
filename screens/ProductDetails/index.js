import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, Image, Button, StyleSheet } from 'react-native';

const ProductDetails = ({
  route,
  navigation
}) => {
  const [product, setProduct] = useState(null);
  const products = [{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
  }, {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"]
  }];
  useEffect(() => {
    const {
      productId
    } = route.params;
    const selectedProduct = products.find(product => product.id === productId);
    setProduct(selectedProduct);
  }, []);

  const addToCart = () => {
    // Add to cart functionality here
    navigation.navigate('AddToCart', {
      product
    });
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
        <Button title="Add to Cart" onPress={addToCart} />
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
  }
});
export default ProductDetails;