import { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,FlatList,StyleSheet } from "react-native";

export default function MealListScreen() {
  const [mealName, setMealName] = useState("");
  const [mealType, setMealType] = useState("breakfast");
  const [meals, setMeals] = useState([]);

  function addMeal() {
    if (mealName === "") return;
    let newMeal = {id: Date.now().toString(), name: mealName, type: mealType};
    setMeals(meals.concat(newMeal));
    setMealName("");
  }
  function deleteMeal(id) {
    let newList = [];
    for (let i = 0; i < meals.length; i++) {
      if (meals[i].id !== id) {
        newList.push(meals[i]);
      }
    }
    setMeals(newList);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Name</Text>
      <TextInput
        style={styles.input}
        value={mealName}
        onChangeText={setMealName}
        placeholder="e.g Pasta or Chicken"
      />
      <Text style={styles.title}>Type</Text>
      <View style={styles.typeContainer}>
        <TouchableOpacity onPress={() => setMealType("breakfast")}>
          <Text>
            {mealType === "breakfast" ? "[breakfast]" : "breakfast"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMealType("lunch")}>
          <Text>
            {mealType === "lunch" ? "[lunch]" : "lunch"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMealType("dinner")}>
          <Text>
            {mealType === "dinner" ? "[dinner]" : "dinner"}
          </Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.Addbutton} onPress={addMeal}>
        <Text style={styles.text}>Add Meal</Text>
      </TouchableOpacity>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>No meals added yet.</Text>}
        renderItem={({ item }) => (
          <View style={styles.mealRow}>

            <Text>
              {item.name} -- {item.type}
            </Text>
            <TouchableOpacity style={styles.DeleteButton} onPress={() => deleteMeal(item.id)}>
              <Text style={styles.text}>delete</Text>
            </TouchableOpacity>

          </View>
        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },

  title: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical:8,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
  },

  typeContainer: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 8,
  },

  Addbutton: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor:"powderblue",
    color: "white",
    marginVertical: 10,
  },
  DeleteButton: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor:"lightcoral",
    color: "white",
  },
  text:{
    textAlign: "center",
  },
  mealRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  }
});