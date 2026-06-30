# Profile Screen — Reusable Components (Day 2)

A simple React Native (Expo) screen built to practice reusable components, props, basic styling, and mobile layout fundamentals.

## Learning Goals

- Reusable components
- Props in React Native components
- Basic folder structure
- Styling with `StyleSheet`
- Mobile spacing and layout
- Touch targets and readable font sizes

## What This Project Does

A profile screen where a user can type their name, email, and a short bio into input fields. The entered details are displayed live inside a profile card, with an Edit button below it.

## Components

All reusable components live in `components/`.

### `Header`
Displays a screen title.

```tsx
<Header title="My Profile" />
```

| Prop  | Type   | Description           |
|-------|--------|------------------------|
| title | string | Text displayed as the header |

### `InputField`
A styled, controlled text input.

```tsx
<InputField value={name} onChangeText={setName} placeholder="Enter your name" />
```

| Prop         | Type                     | Description                          |
|--------------|--------------------------|---------------------------------------|
| value        | string                   | Current text value                    |
| onChangeText | (text: string) => void   | Called with updated text on every keystroke |
| placeholder  | string                   | Hint text shown when empty            |

### `Card`
A generic styled container used to group and display content.

```tsx
<Card>
  <Text>Name: {name}</Text>
</Card>
```

| Prop     | Type            | Description                  |
|----------|-----------------|-------------------------------|
| children | React.ReactNode | Content rendered inside the card |

### `PrimaryButton`
A styled, tappable button.

```tsx
<PrimaryButton title="Edit" onPress={() => console.log("Edit")} />
```

| Prop    | Type         | Description                  |
|---------|--------------|--------------------------------|
| title   | string       | Text displayed on the button   |
| onPress | () => void   | Called when the button is tapped |

## Screen

`index.tsx` assembles the components into the profile screen:

- `Header` — screen title
- Three `InputField`s — name, email, short bio (each backed by its own `useState`)
- `Card` — displays the live values of name, email, and bio
- `PrimaryButton` — labeled "Edit"

Each input is a **controlled component**: its `value` comes from state in `index.tsx`, and typing calls `onChangeText`, which updates that state and re-renders the screen with the new value.

## Folder Structure

```
components/
  Card.tsx
  Header.tsx
  InputField.tsx
  PrimaryButton.tsx
app/
  index.tsx
```

## Styling Notes

- Each component defines its own default styles using `StyleSheet.create`.
- The screen container (`index.tsx`) handles overall page spacing.
- `InputField` and `PrimaryButton` use `minHeight: 44` to meet minimum mobile touch-target size.
- Font sizes range from 16–24, kept within readable ranges for mobile screens.

## Running the Project

```bash
npm install
npx expo start
```

Then open the app in Expo Go, an emulator, or a simulator.

## Notes / Next Steps

The Edit button currently logs to the console (`console.log("Edit")`) and has no visible effect on screen — wiring it up to toggle an actual edit mode is a planned next step, not part of this stage's scope.
