import { tokens } from "@/constants/tokens";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.paragraphHeaderText}>Explorar</Text>
          <Text style={styles.headingHeaderText}>Games</Text>
        </View>

        <Image
          source={require("@/app/assets/images/profile-image.png")}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.gameAdContainer}>
        <TouchableOpacity style={styles.buttonGameAd}>
          <Image
            source={require("@/app/assets/images/league-of-legends-ad-cover.png")}
            style={styles.imageGameAd}
          />

          <View style={styles.textAreaGameAd}>
            <Image
              source={require("@/app/assets/images/league-of-legends-logo.png")}
            />
            <Text style={styles.paragraphGameAd}>Ache seu duo agora no</Text>
            <Text>League of Legends</Text>
            <Text>4 anúncios</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background,
    paddingVertical: 44,
    paddingHorizontal: 24,
    width: "100%",
    height: "100%",
    gap: 24,
  },
  header: {
    width: "100%",
    height: 94,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    height: "100%",
    justifyContent: "center",
  },
  paragraphHeaderText: {
    fontSize: tokens.size.med,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  headingHeaderText: {
    fontSize: tokens.size.title,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  profileImage: {
    borderRadius: 60,
    width: 56,
    height: 56,
  },
  gameAdContainer: {
    width: "100%",
    height: 145,
  },
  buttonGameAd: {
    width: "100%",
    height: 145,
  },
  imageGameAd: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textAreaGameAd: {
    position: "absolute",
    top: 0,
    padding: 16,
  },
  paragraphGameAd: {
    fontWeight: 500,
    fontSize: tokens.size.min,
    color: tokens.colors.paragraph,
  },
});
