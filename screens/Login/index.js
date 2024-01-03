import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate("Categories");
    } else {
      Alert.alert("Error", "Please enter username and password");
    }
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} style={styles.APdizOCF} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f9f9f9"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8
  },
  APdizOCF: {
    position: "relative",
    left: 200,
    top: 635,
    transform: [{
      rotate: "11deg"
    }]
  }
});
export default Login;