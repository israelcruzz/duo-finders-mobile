import { Slot } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Loading from "@/components/loading/loading";

export default function Layout() {
  const [fontLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return <>{fontLoading ? <Slot /> : <Loading />}</>;
}
