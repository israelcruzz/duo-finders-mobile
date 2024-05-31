import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

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
    <View>
      <Text>{params.id}</Text>
    </View>
  );
}
