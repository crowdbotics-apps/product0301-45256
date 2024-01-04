import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, Image, View, StyleSheet } from "react-native";

const Category = ({
  route
}) => {
  const [data, setData] = useState([]);
  const {
    category
  } = route.params;
  useEffect(() => {
    const products = {
      products: [{
        id: 36,
        title: "Sleeve Shirt Womens",
        description: "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
        price: 90,
        discountPercentage: 10.89,
        rating: 4.26,
        stock: 39,
        brand: "Professional Wear",
        category: "tops",
        thumbnail: "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/36/1.jpg", "https://i.dummyjson.com/data/products/36/2.webp", "https://i.dummyjson.com/data/products/36/3.webp", "https://i.dummyjson.com/data/products/36/4.jpg", "https://i.dummyjson.com/data/products/36/thumbnail.jpg"]
      }, {
        id: 39,
        title: "Women Sweaters Wool",
        description: "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
        price: 600,
        discountPercentage: 17.2,
        rating: 4.55,
        stock: 55,
        brand: "Top Sweater",
        category: "tops",
        thumbnail: "https://i.dummyjson.com/data/products/39/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/39/1.jpg", "https://i.dummyjson.com/data/products/39/2.jpg", "https://i.dummyjson.com/data/products/39/3.jpg", "https://i.dummyjson.com/data/products/39/4.jpg", "https://i.dummyjson.com/data/products/39/thumbnail.jpg"]
      }, {
        id: 6,
        title: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
        images: ["https://i.dummyjson.com/data/products/6/1.png", "https://i.dummyjson.com/data/products/6/2.jpg", "https://i.dummyjson.com/data/products/6/3.png", "https://i.dummyjson.com/data/products/6/4.jpg"]
      }, {
        id: 7,
        title: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: "Samsung",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/7/1.jpg", "https://i.dummyjson.com/data/products/7/2.jpg", "https://i.dummyjson.com/data/products/7/3.jpg", "https://i.dummyjson.com/data/products/7/thumbnail.jpg"]
      }, {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/8/1.jpg", "https://i.dummyjson.com/data/products/8/2.jpg", "https://i.dummyjson.com/data/products/8/3.jpg", "https://i.dummyjson.com/data/products/8/4.jpg", "https://i.dummyjson.com/data/products/8/thumbnail.jpg"]
      }, {
        id: 9,
        title: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/9/1.jpg", "https://i.dummyjson.com/data/products/9/2.png", "https://i.dummyjson.com/data/products/9/3.png", "https://i.dummyjson.com/data/products/9/4.jpg", "https://i.dummyjson.com/data/products/9/thumbnail.jpg"]
      }, {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        images: ["https://i.dummyjson.com/data/products/10/1.jpg", "https://i.dummyjson.com/data/products/10/2.jpg", "https://i.dummyjson.com/data/products/10/3.jpg", "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"]
      }],
      total: 5,
      skip: 0,
      limit: 5
    };
    const filteredProducts = products.products.filter(item => item.category === category);
    setData(filteredProducts);
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {data.map((item, index) => <View key={index} style={styles.itemContainer}>
            <Image source={{
          uri: item.thumbnail
        }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  contentContainer: {
    padding: 10
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    marginTop: 5
  },
  errorStyle: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30
  }
});
export default Category;