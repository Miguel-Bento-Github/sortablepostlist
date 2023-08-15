import { defineStore } from "pinia";

interface State {
  isLoading: boolean;
}

export const useGlobalLoadingStore = defineStore({
  id: "loading",
  state: (): State => ({
    isLoading: true
  })
});
