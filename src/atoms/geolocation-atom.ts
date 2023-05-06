import { atom, useRecoilState } from "recoil";

import { GeolocationAtom } from "@/types/atom";

const geolocationAtom = atom<GeolocationAtom>({
  key: "geolocation",
  default: {
    lat: 0,
    lng: 0,
  },
});

export const useGeolocationAtom = () => {
  const [geolocationState, setGeolocationState] =
    useRecoilState(geolocationAtom);

  return { geolocationState, setGeolocationState };
};
