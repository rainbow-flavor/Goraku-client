export interface Store {
  id?: string;
  city1?: string;
  city2?: string;
  name?: string;
  address?: string;
  uptime?: string;
  isop?: boolean;
  latitude?: string;
  longitude?: string;
  contact?: string;
  twitter?: string;
  website?: string;
  networkType: Record<Card, boolean> | null;
}

export type Card = "k" | "n" | "s" | "t" | "a";
