import { type Provider } from "../types/types";

export const mockProviders: Provider[] = [
  { value: "skywind_group", label: "Skywind Group" },
  { value: "pragmatic", label: "Pragmatic" },
  { value: "hacksaw", label: "Hacksaw" },
  { value: "pg", label: "PG" },
  { value: "zitro", label: "Zitro" },
  { value: "in_out", label: "In Out" },
  { value: "imoon", label: "iMoon" },
  { value: "ortiz", label: "Ortiz" },
  { value: "playtech", label: "Playtech" },
  // { value: "fat_panda", label: "Fat Panda" },
];

export const providerApi = {
  getProviders: (): Promise<{
    success: boolean;
    providers: Provider[];
  }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, providers: mockProviders });
      }, 1000);
    });
  },
};
