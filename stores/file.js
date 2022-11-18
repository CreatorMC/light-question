import { defineStore } from "pinia";

export const useFileStore = defineStore("file", () => {
  state: () =>  {
    return {
      user: null
    }
  }
});
