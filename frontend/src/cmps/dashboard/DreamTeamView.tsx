import { DreamTeamViewProps } from "../../services/interface";
import Field from "./Field";

export default function DreamTeamView({
  dreamTeamPlayers,
}: DreamTeamViewProps) {
  if (!dreamTeamPlayers) return <div>Loading...</div>;

  return <Field dreamTeamPlayers={dreamTeamPlayers} />;
}
