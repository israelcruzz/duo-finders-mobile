import ButtonBack from "@/components/button-back";
import { tokens } from "@/constants/tokens";
import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

interface GameParams {
  key: string;
  name: string;
  params: {
    id: string;
  };
}

export default function Game({}) {
  const { params } = useRoute<GameParams>();

  return (
    <View style={styles.container}>
      <View style={styles.areaPhotoGame}>
        <Image
          style={styles.photoGame}
          source={require("@/app/assets/images/league-of-legends-game.png")}
        />
        <View style={styles.buttonBackArea}>
          <ButtonBack />
        </View>
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
    gap: 24,
  },
  areaPhotoGame: {
    width: "100%",
  },
  photoGame: {
    width: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
  buttonBackArea: {
    position: "absolute",
    top: 0,
    margin: 12,
  },
});
