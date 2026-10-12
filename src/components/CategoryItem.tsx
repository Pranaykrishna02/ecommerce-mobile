import { Pressable, StyleSheet, Text, View } from "react-native";

export type Category = {
  id: string;
  name: string;
  emoji: string;
};

type CategoryItemProps = {
  item: Category;
  onPress?: (category: Category) => void;
};

export default function CategoryItem({ item, onPress }: CategoryItemProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${item.name} category`}
      onPress={() => onPress?.(item)}
      style={({ pressed }) => [styles.categoryItem, pressed && styles.pressed]}
    >
      <View style={styles.categoryIcon}>
        <Text style={styles.categoryEmoji}>{item.emoji}</Text>
      </View>

      <Text style={styles.categoryName}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: "center",
    width: 75,
  },
  categoryIcon: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: "#F2F5FB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },
  categoryEmoji: {
    fontSize: 27,
  },
  categoryName: {
    fontSize: 10,
    color: "#414B5E",
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
