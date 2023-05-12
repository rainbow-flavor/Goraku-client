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
  networkType?: Network;
  storeMachines: Machine[];
}

export type NetworkCardType = "k" | "n" | "s" | "t" | "a";
export type Network = Record<NetworkCardType, boolean>;

export interface Machine {
  id: number;
  machineCount: number;
  description?: string;
  machine: {
    id: number;
    koName: string;
    enName: string;
    shortName: "beatmania IIDX 29";
    category: "RHYTHM";
    company: "BEMANI";
    description: null;
    parent: {
      id: 5;
      koName: "비트매니아";
      enName: "beatmania";
      shortName: "투덱";
      category: "RHYTHM";
      company: null;
      description: null;
      parent: null;
    };
  };
}
