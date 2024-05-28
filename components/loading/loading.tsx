import { ActivityIndicatorComponent } from "react-native";
import { styles } from "./styles";

export default function Loading() {
  return <ActivityIndicatorComponent style={styles.container} />;
}
