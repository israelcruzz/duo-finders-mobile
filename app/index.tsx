import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet } from "react-native";

export default function Login() {
  return (
    <LinearGradient colors={["transparent", "black"]} style={styles.container}>
      <Image
        source={require("@/app/assets/images/login-image.png")}
        style={styles.image}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
