
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  onPress: () => void;
};

export default function ProductCard({
  product,
  onPress,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel={product.name}
        />
      </View>

      <Text style={styles.name} numberOfLines={2}>
        {product.name}
      </Text>

      <Text style={styles.price}>{product.price}</Text>

      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.buttonText}>View Product</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48.5%",
    padding: 10,
    marginBottom: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EDF0F5",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    height: 125,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#F8F9FC",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 13,
    fontWeight: "700",
    color: "#273247",
    minHeight: 36,
  },
  price: {
    fontSize: 16,
    fontWeight: "800",
    color: "#172033",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#425BD5",
    paddingVertical: 11,
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
