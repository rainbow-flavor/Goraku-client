import { locationMap } from "@/constants/location";

export type Si = keyof typeof locationMap | "all";
export type TabType = "city" | "card" | "open";
