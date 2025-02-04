import { useMutation } from "@tanstack/react-query";
import { userClient } from "../client";
import { UserLoginType, UserRegisterType } from "../../utility/types";

export function useUserLogin() {
  return useMutation({
    mutationFn: (loginData: UserLoginType) => {
      return userClient.post("/login", loginData);
    },
  });
}

export function useUserRegister() {
  return useMutation({
    mutationFn: (registerData: UserRegisterType) => {
      return userClient.post("/register", registerData);
    },
  });
}
