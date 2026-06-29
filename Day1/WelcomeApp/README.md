# WriteO Internship — React Native + Expo

This repository contains my daily task submissions for the WriteO React Native internship.

## 📅 Day 1 — WriteO Overview & React Native Setup

### What I Did
- Explored the WriteO platform (staging/demo) to understand its purpose, features, and target users
- Set up a React Native development environment using Expo
- Built a simple Expo app with a name input, submit button, and dynamic greeting text

### Task 1 — WriteO Overview
- A document containing overview of WriteO is added.

### Task 2 — First Expo App
Built a simple Expo app (`/Day1/WelcomeApp`) with:
- A welcome screen
- A name input field (`TextInput`)
- A submit button (`Pressable`)
- Text that displays "Welcome, [name]" after pressing submit

**Tech used:** React Native, Expo SDK 54, TypeScript

### Blockers Faced & How I Solved Them
- **SDK version mismatch:** Project was initially created on Expo SDK 56, but Expo Go on my iPhone only supported SDK 54 (App Store hadn't approved the newer Expo Go version yet). Fixed by recreating the project with `npx create-expo-app@latest --template default@sdk-54`.
- **iOS Local Network permission:** Expo Go's "Local Network" permission was toggled off in iPhone settings, which silently blocked the connection even though WiFi looked fine on both devices. Enabling it fixed the connection.


### How to Run
```bash
cd Day1/WelcomeApp
npm install
npx expo start
```
Scan the QR code with the Expo Go app (iOS/Android).

---
