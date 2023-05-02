import { StaticImageData } from "next/image";

import Andamiro from "@/assets/andamiro.png";
import Konami from "@/assets/konami.png";
import Namco from "@/assets/namco.png";
import Sega from "@/assets/sega.jpeg";
import Taito from "@/assets/taito.png";
import { Card } from "@/types/store";

export const cardMap: Record<
  Card,
  { thumbnail: StaticImageData; name: string }
> = {
  k: {
    name: "KONAMI",
    thumbnail: Konami,
  },
  n: {
    name: "NAMCO",
    thumbnail: Namco,
  },
  s: {
    name: "SEGA",
    thumbnail: Sega,
  },
  t: {
    name: "TAITO",
    thumbnail: Taito,
  },
  a: {
    name: "ANDAMIRO",
    thumbnail: Andamiro,
  },
};
