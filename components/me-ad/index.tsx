import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AdTextSection from "../ad-text-section";
import { tokens } from "@/constants/tokens";

interface MeAdProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

export default function MeAd({
  id,
  name,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel,
}: MeAdProps) {
  return (
    <View style={styles.container}>
      <AdTextSection head="Nome" description={name} />
      <AdTextSection
        head="Tempo de Jogo"
        description={`${yearsPlaying} anos`}
      />
      <AdTextSection
        head="Disponibilidade"
        description={`${weekDays} - ${hourStart}|${hourEnd}hrs`}
      />
      <AdTextSection
        head="Chamada de Áudio"
        description={useVoiceChannel ? "Sim" : "Não"}
        color={{ active: useVoiceChannel }}
      />

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Apagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 175,
    backgroundColor: tokens.colors.darkBackground,
    gap: 16,
    padding: 20,
    borderRadius: 10,
  },
  deleteButton: {
    width: "100%",
    backgroundColor: tokens.colors.red,
    borderRadius: 10,
    paddingVertical: 8,
  },
  deleteButtonText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: 12,
  },
});
