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
    shortName: string;
    category: string;
    company: string;
    description: null;
    parent: {
      id: number;
      koName: string;
      enName: string;
      shortName: string;
      category: string;
      company?: string;
      description?: string;
      parent?: null;
    };
  };
}
