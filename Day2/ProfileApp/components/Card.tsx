import { StyleSheet, View } from "react-native";

interface CardProps {
  children: React.ReactNode;
}
const Card = ({ children }: CardProps) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
});

export default Card;
