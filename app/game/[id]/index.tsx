import ButtonBack from "@/components/button-back";
import { tokens } from "@/constants/tokens";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

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
      <Text>{params.id}</Text>

      <ButtonBack />
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
});
