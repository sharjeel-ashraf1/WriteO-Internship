import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [nameInput, setInput] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the App</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => setInput(text)}
      />

      <Pressable style={styles.button} onPress={() => setName(nameInput)}>
        <Text style={styles.buttontext}>Submit</Text>
      </Pressable>

      <Text>Welcome, {name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    width: 200,
    marginVertical: 10,
    backgroundColor: "blue",
    alignItems: "center",
    padding: 10,
  },
  buttontext: {
    color: "white",
  },
});
