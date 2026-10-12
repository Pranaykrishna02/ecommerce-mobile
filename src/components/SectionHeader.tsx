import { Pressable, StyleSheet, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  action?: string;
  onActionPress?: () => void;
};

export default function SectionHeader({
  title,
  action,
  onActionPress,
}: SectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>

      {action ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`${action} ${title}`}
          onPress={onActionPress}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.seeAll}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#172033",
    fontSize: 18,
    fontWeight: "800",
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  seeAll: {
    color: "#425BD5",
    fontSize: 12,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.7,
  },
});
