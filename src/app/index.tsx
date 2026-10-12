import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import ProductCard, { type Product } from "@/components/ProductCard";

import CategoryItem, { type Category } from "@/components/CategoryItem";

import PromoBanner from "@/components/PromoBanner";
import SectionHeader from "@/components/SectionHeader";

const categories: Category[] = [
  { id: "1", name: "Electronics", emoji: "🎧" },
  { id: "2", name: "Fashion", emoji: "👕" },
  { id: "3", name: "Shoes", emoji: "👟" },
  { id: "4", name: "Accessories", emoji: "⌚" },
];

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "2",
    name: "Classic Sneakers",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "4",
    name: "Travel Backpack",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=85",
  },
];

export default function HomeScreen() {
  const handleCategoryPress = (category: Category) => {
    console.log("Selected category:", category.name);
  };

  const handleProductPress = (product: Product) => {
    console.log("Selected product:", product.name);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Store Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.storeName}>MyStore</Text>
            <Text style={styles.storeSubtitle}>
              Your everyday shopping destination
            </Text>
          </View>

          <View style={styles.cartIcon}>
            <Text style={styles.cartEmoji}>🛍️</Text>
          </View>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Hello, Shopper! 👋</Text>

          <Text style={styles.welcomeSubtitle}>
            Find something you'll love today.
          </Text>
        </View>

        {/* Promotional Banner */}
        <PromoBanner />

        {/* Categories */}
        <SectionHeader
          title="Shop by Category"
          action="See all"
          onActionPress={() => console.log("See all categories pressed")}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          {categories.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              onPress={handleCategoryPress}
            />
          ))}
        </ScrollView>

        {/* Featured Products */}
        <SectionHeader
          title="Featured Products"
          action="See all"
          onActionPress={() => console.log("See all products pressed")}
        />

        <View style={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => handleProductPress(product)}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Thanks for shopping with MyStore ❤️
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  storeName: {
    fontSize: 27,
    fontWeight: "800",
    color: "#172033",
  },

  storeSubtitle: {
    color: "#7B8494",
    fontSize: 11,
    marginTop: 3,
  },

  cartIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#F0F4FF",
    justifyContent: "center",
    alignItems: "center",
  },

  cartEmoji: {
    fontSize: 23,
  },

  welcomeSection: {
    marginBottom: 20,
  },

  welcomeTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#172033",
  },

  welcomeSubtitle: {
    fontSize: 13,
    color: "#7B8494",
    marginTop: 5,
  },

  categoriesList: {
    paddingBottom: 27,
    gap: 17,
  },

  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    rowGap: 16,
  },

  footer: {
    alignItems: "center",
    paddingVertical: 27,
  },

  footerText: {
    color: "#7B8494",
    fontSize: 12,
  },
});
