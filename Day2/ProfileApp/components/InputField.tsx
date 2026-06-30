import { StyleSheet, TextInput } from "react-native";

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    fontSize: 16,
  },
});

export default InputField;
