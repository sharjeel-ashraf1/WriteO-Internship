import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import PrimaryButton from "../../components/PrimaryButton";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  return (
    <View style={styles.container}>
      <Header title="My Profile" />

      <InputField
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <InputField
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email address"
      />

      <InputField
        value={bio}
        onChangeText={setBio}
        placeholder="Enter a short bio"
      />

      <Card>
        <Text style={styles.cardText}>Name: {name}</Text>

        <Text style={styles.cardText}>Email: {email}</Text>

        <Text style={styles.cardText}>Bio: {bio}</Text>
      </Card>

      <PrimaryButton title="Edit" onPress={() => console.log("Edit")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
