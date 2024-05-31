import Avatar from "@/components/avatar";
import Heading from "@/components/heading";
import { tokens } from "@/constants/tokens";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SectionText from "@/components/section-text";
import AdTextSection from "@/components/ad-text-section";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Heading title="Perfil" />

      <View style={styles.profileArea}>
        <View style={styles.profileAreaTextAndAvatar}>
          <View style={styles.avatarArea}>
            <Avatar />
          </View>

          <View>
            <Text style={styles.name}>Israel</Text>
            <Text style={styles.discord}>@israelcruzz</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Ionicons name="exit-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <SectionText title="Seus Anúncios" />

      <AdTextSection head="Nickname" description="mizukyy"  />
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
  profileArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  profileAreaTextAndAvatar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatarArea: {
    width: 78,
    height: 78,
  },
  name: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
  },
  discord: {
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "400",
    fontSize: 16,
  },
});
