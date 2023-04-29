import api from "@/api/api";

export const fetchStoreList = (machineName: string) => {
  return api.get("/machine/search", {
    params: {
      machineName,
    },
  });
};
