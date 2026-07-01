# Day 3 - Meal List Screen

A simple meal tracking screen built as part of the **epuloweek** practice project.

---

## Learning Goals

- `useState` in mobile screens
- Form input handling
- FlatList
- Empty states
- Add and delete interactions

---

## What It Does

- Add a meal by entering a name and selecting a type
- Meal types: Breakfast, Lunch, Dinner
- View all added meals in a list
- Delete any meal from the list
- Shows an empty state message when no meals are added

---

## State Management

Three pieces of state are used:

| State | Type | Purpose |
|-------|------|---------|
| `mealName` | String | Tracks what the user is typing in the input |
| `mealType` | String | Tracks which meal type is selected |
| `meals` | Array | Holds all the meal objects |

**Adding a meal** — a new meal object `{ id, name, type }` is created and added to the meals array using `concat`. The id is generated using `Date.now().toString()` to keep each meal unique.

**Deleting a meal** — a for loop goes through the meals array and builds a new list that skips the meal matching the given id. That new list replaces the old one in state.

---

## Bugs and Limitations

**Bug — spaces pass the empty check**
If the user types only spaces and hits Add, a blank meal gets added. Fixed by using `.trim()` on the input before checking if it is empty.

**Limitation — no persistence**
Meals are stored in `useState` which only lives in memory. Reloading the app clears everything. This would require `AsyncStorage` to fix, which is beyond the scope of Day 3.

---

## Built With

- React Native
- Expo
