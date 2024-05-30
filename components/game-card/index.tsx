import { tokens } from "@/constants/tokens";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function GameCard() {
  return (
    <TouchableOpacity style={styles.gameCard}>
      <Image
        source={require("@/app/assets/images/league-of-legends-image.png")}
        style={styles.gameCardImage}
      />

      <Text style={styles.gameCardTextArea}>
        <Text style={styles.gameCardTitle}>League of Legends </Text>
        <Text style={styles.gameCardDescription}> 4 anúncios</Text>
      </Text>

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
        style={styles.gradient}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gameCard: {
    width: 175,
    height: 216,
    borderRadius: 12,
  },
  gameCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    objectFit: "cover",
  },
  gameCardTextArea: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    zIndex: 90,
  },
  gameCardTitle: {
    fontWeight: "700",
    color: "#FFFFFF",
    fontSize: tokens.size.med,
  },
  gameCardDescription: {
    fontWeight: "700",
    color: tokens.colors.sub,
    fontSize: tokens.size.sub,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "90%",
    opacity: 1,
    borderRadius: 24,
  },
});
