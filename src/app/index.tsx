import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CategoryItem, { type Category } from "@/components/CategoryItem";
import ProductCard from "@/components/ProductCard";
import PromoBanner from "@/components/PromoBanner";
import SectionHeader from "@/components/SectionHeader";

import { products } from "../../data/products";

const categories: Category[] = [
  { id: "1", name: "Electronics", emoji: "🎧" },
  { id: "2", name: "Fashion", emoji: "👕" },
  { id: "3", name: "Shoes", emoji: "👟" },
  { id: "4", name: "Accessories", emoji: "⌚" },
];

export default function HomeScreen() {
  console.log("Total products loaded:", products.length);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.productsRow}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListHeaderComponent={
          <View>
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
            <SectionHeader title="Shop by Category" />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
            >
              {categories.map((item) => (
                <CategoryItem
                  key={item.id}
                  item={item}
                  onPress={() => console.log("Selected category:", item.name)}
                />
              ))}
            </ScrollView>

            {/* Products */}
            <SectionHeader title="Featured Products" />

            <Text style={styles.productCount}>
              {products.length} products available
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No products available</Text>
            <Text style={styles.emptySubtitle}>Please check back later.</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Thanks for shopping with MyStore ❤️
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  listContent: {
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 20,
    flexGrow: 1,
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
  productsRow: {
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 16,
  },
  productCount: {
    fontSize: 12,
    color: "#7B8494",
    marginTop: -8,
    marginBottom: 16,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#172033",
  },
  emptySubtitle: {
    fontSize: 13,
    color: "#7B8494",
    marginTop: 6,
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
