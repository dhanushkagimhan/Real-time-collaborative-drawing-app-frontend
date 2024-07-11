import { useMutation } from "@tanstack/react-query";
import { userClient } from "../client";
import { UserLoginType } from "../../utility/types";

export function useUserLogin() {
  return useMutation({
    mutationFn: (loginData: UserLoginType) => {
      return userClient.post("/login", loginData);
    },
  });
}
