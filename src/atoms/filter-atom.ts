import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { FilterAtom } from "@/types/atom";
import { Card } from "@/types/store";

const initialCard: { name: Card; checked: boolean }[] = [
  {
    name: "k",
    checked: false,
  },
  {
    name: "n",
    checked: false,
  },
  {
    name: "s",
    checked: false,
  },
  {
    name: "t",
    checked: false,
  },
  {
    name: "a",
    checked: false,
  },
];

const initialCity: FilterAtom["city"] = {
  si: "all",
  gu: "",
};

const initialOpen = false;
const filterAtom = atom<FilterAtom>({
  key: "filter",
  default: {
    card: initialCard,
    city: initialCity,
    open: initialOpen,
  },
});

const initialFilterState = selector({
  key: "initial-filter",
  get: ({ get }) => {
    const filterState = get(filterAtom);

    const diffCard = (cards?: FilterAtom["card"]) => {
      if (cards) {
        return initialCard.some(
          (item, index) => item.checked !== cards[index].checked
        );
      }

      return initialCard.some(
        (item, index) => item.checked !== filterState.card[index].checked
      );
    };

    const diffCity = (city?: FilterAtom["city"]) => {
      if (city) {
        return initialCity.gu !== city.gu || initialCity.si !== city.si;
      }

      return (
        initialCity.gu !== filterState.city.gu ||
        initialCity.si !== filterState.city.si
      );
    };

    const diffOpen = (open?: FilterAtom["open"]) => {
      return open;
    };

    const translateKey = (key: string) => {
      switch (key) {
        case "seoul":
          return "서울";
        case "gyeonggi":
          return "경기남부";
        default:
          return "전국";
      }
    };

    return {
      diffCard,
      diffCity,
      diffOpen,
      initialCard,
      initialCity,
      initialOpen,
      translateKey,
    };
  },
});

export const useFilterState = () => {
  const [filterState, setFilterState] = useRecoilState(filterAtom);
  const utilFn = useRecoilValue(initialFilterState);

  return {
    filterState,
    setFilterState,
    ...utilFn,
  };
};
