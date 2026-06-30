import { StyleSheet, Text } from "react-native";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return <Text style={styles.header}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Header;
