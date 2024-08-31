import { Dispatch, SetStateAction } from "react";

export interface TabsProps {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
}
