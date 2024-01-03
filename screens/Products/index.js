import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";

const ListScreen = ({
  navigation
}) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = [{
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
    }, {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/2/1.jpg", "https://i.dummyjson.com/data/products/2/2.jpg", "https://i.dummyjson.com/data/products/2/3.jpg", "https://i.dummyjson.com/data/products/2/thumbnail.jpg"]
    }];
    setData(fetchData);
    setFilteredData(fetchData);
  }, []);

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      if (newData.length) {
        setFilteredData(newData);
        setSearch(text);
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setFilteredData(data);
      setSearch(text);
      setError(false);
    }
  };

  const sortData = () => {
    const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
    setFilteredData(sortedData);
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("ProductDetails", {
    item
  })}>
      <Image source={{
      uri: item.thumbnail
    }} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.descriptionStyle}>{item.description}</Text>
        <Text style={styles.priceStyle}>${item.price}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.inputStyle} value={search} placeholder="Search by title..." onChangeText={text => searchFilter(text)} />
      <Button title="Sort by price" onPress={sortData} />
      {error && <Text>No items found</Text>}
      <FlatList data={filteredData} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>;
};

export default ListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "space-between"
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  descriptionStyle: {
    fontSize: 12,
    color: "#888888"
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000"
  },
  inputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 20,
    margin: 10
  }
});