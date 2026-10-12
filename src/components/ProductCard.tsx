import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const handlePress = () => {
    Alert.alert("Product Selected", product.name);
  };

  return (
    <View style={styles.card}>
      <Pressable
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityLabel={`View details for ${product.name}`}
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
      >
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

        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.price}>
          {`₹${product.price.toLocaleString("en-IN")}`}
        </Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8ECF3",
    overflow: "hidden",
    marginBottom: 0,
  },
  pressable: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    height: 130,
    backgroundColor: "#F6F8FC",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    minHeight: 38,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700",
    color: "#172033",
  },
  category: {
    fontSize: 11,
    color: "#778195",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "800",
    color: "#243D8F",
    marginTop: 8,
    marginBottom: 10,
  },
  button: {
    minHeight: 38,
    borderRadius: 9,
    backgroundColor: "#425BD5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});
