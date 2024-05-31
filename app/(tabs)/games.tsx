import Heading from "@/components/heading";
import { tokens } from "@/constants/tokens";
import { StyleSheet, Text, View } from "react-native";

export default function Games() {
  return (
    <View style={styles.container}>
      <Heading title="Games" />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background,
    paddingVertical: 44,
    paddingHorizontal: 24,
  },
});
