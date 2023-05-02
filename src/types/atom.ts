import { ReactNode } from "react";

import { Si } from "@/types/location";
import { Card } from "@/types/store";

export interface FilterAtom {
  card: {
    name: Card;
    checked: boolean;
  }[];
  city: {
    si: Si;
    gu: string;
  };
  open: boolean;
}

export interface SearchAtom {
  searchWord: string;
  list: string[];
}

export type ModalAtom = ReactNode | null;
