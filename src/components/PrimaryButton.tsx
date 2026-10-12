import { Pressable, StyleSheet, Text } from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
};

export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#425BD5",
    paddingVertical: 11,
    paddingHorizontal: 5,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.7,
  },
});
