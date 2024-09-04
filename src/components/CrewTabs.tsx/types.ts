import { Dispatch, SetStateAction } from "react";

export interface CrewProps {
  crewMember: string;
  setCrewMember: Dispatch<SetStateAction<string>>;
}
