import { tokens } from "@/constants/tokens";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const CATEGORIES = ["All games", "Ação", "Luta", "MMORPG", "Rpg"];

export default function Home() {
  const [selectedCategorie, setSelectedCategorie] = useState("All games");

  useEffect(() => {
    console.log(selectedCategorie);
  }, [selectedCategorie]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.paragraphHeaderText}>Explorar</Text>
          <Text style={styles.headingHeaderText}>Games</Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require("@/app/assets/images/profile-image.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
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
            <Text style={styles.headingGameAd}>League of Legends</Text>
            <Text style={styles.countGameAd}>4 anúncios</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.searchInput}>
        <Feather name="search" size={24} color={tokens.colors.lightDarkGray} />
        <TextInput
          placeholder="Search Games"
          style={styles.input}
          placeholderTextColor={tokens.colors.lightDarkGray}
        />
      </View>

      <View>
        <ScrollView
          contentContainerStyle={styles.scrollViewCategoriesArea}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            keyExtractor={(item) => item}
            horizontal
            contentContainerStyle={styles.categoriesList}
            data={CATEGORIES}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.categorieItem,
                  selectedCategorie === item && styles.categorieItemsSelected,
                ]}
                onPress={() => setSelectedCategorie(item)}
              >
                <Text
                  style={[
                    styles.categorieText,
                    selectedCategorie === item && styles.categorieTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>

      <View style={styles.gameArea}>
        <View style={styles.gameTextArea}>
          <Text style={styles.gameText}>Jogos</Text>
          <Text style={styles.gameTextLink}>Ver Mais</Text>
        </View>

        <ScrollView>
          <View style={styles.gameAreaCards}>
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
          </View>
        </ScrollView>
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
    fontWeight: "500",
    fontSize: tokens.size.min,
    color: tokens.colors.paragraph,
    marginTop: 12,
  },
  headingGameAd: {
    fontWeight: "600",
    fontSize: tokens.size.normal,
    color: "#FFFFFF",
    marginBottom: 4,
  },
  countGameAd: {
    fontWeight: "500",
    fontSize: tokens.size.min,
    color: "#666666",
  },
  searchInput: {
    flexDirection: "row",
    backgroundColor: tokens.colors.darkBackground,
    borderRadius: 8,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "center",
    gap: 16,
  },
  input: {
    color: tokens.colors.lightDarkGray,
  },
  scrollViewCategoriesArea: {
    height: 36,
  },
  categoriesList: {
    width: "100%",
    height: 36,
    gap: 24,
  },
  categorieItem: {
    paddingHorizontal: 16,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: tokens.colors.darkBackground,
    borderRadius: 8,
  },
  categorieItemsSelected: {
    backgroundColor: tokens.colors.primary,
  },
  categorieText: {
    color: tokens.colors.gray,
  },
  categorieTextSelected: {
    color: "#FFFFFF",
  },
  gameArea: {
    width: "100%",
    height: "100%",
  },
  gameTextArea: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  gameText: {
    color: "#FFFFFF",
    fontSize: tokens.size.logo,
    fontWeight: "600",
  },
  gameTextLink: {
    color: tokens.colors.primary,
  },
  gameAreaCards: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },

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
