import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UserData = {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
};

type UserState = {
  user?: UserData;
  setUser: (values: UserData) => void;
};

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        setUser: (values) => set(() => ({ user: values })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useUserStore;
