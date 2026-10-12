import { StyleSheet, Text, View } from "react-native";

type PromoBannerProps = {
  label?: string;
  title?: string;
  subtitle?: string;
  offer?: string;
  emoji?: string;
};

export default function PromoBanner({
  label = "SPECIAL OFFER",
  title = "Big Shopping Sale!",
  subtitle = "Discover your favorites and save more.",
  offer = "UP TO 50% OFF",
  emoji = "🛒",
}: PromoBannerProps) {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerLabel}>{label}</Text>

        <Text style={styles.bannerTitle}>{title}</Text>

        <Text style={styles.bannerSubtitle}>{subtitle}</Text>

        <View style={styles.offerBadge}>
          <Text style={styles.offerText}>{offer}</Text>
        </View>
      </View>

      <Text style={styles.bannerEmoji}>{emoji}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    minHeight: 165,
    borderRadius: 22,
    padding: 19,
    backgroundColor: "#243D8F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 27,
    overflow: "hidden",
  },
  bannerContent: {
    flex: 1,
  },
  bannerLabel: {
    color: "#BFD0FF",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
  },
  bannerSubtitle: {
    color: "#E1E7FF",
    fontSize: 11,
    marginTop: 7,
    maxWidth: 210,
  },
  offerBadge: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 13,
  },
  offerText: {
    color: "#243D8F",
    fontSize: 10,
    fontWeight: "800",
  },
  bannerEmoji: {
    fontSize: 43,
    marginLeft: 7,
  },
});
