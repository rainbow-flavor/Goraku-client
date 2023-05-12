import { ReactNode } from "react";

import { Si } from "@/types/filter";
import { NetworkCardType } from "@/types/store";

export interface FilterAtom {
  card: {
    name: NetworkCardType;
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

export interface GeolocationAtom {
  lat: number;
  lng: number;
}
